import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { LoginForm } from '@/data-types';

export default function useLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HEYJONG_ATTENDANCE}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        const tokenBase64 = btoa(data.data.access_token);
        Cookies.set('authToken', tokenBase64, {
          expires: 7,
          secure: true,
          sameSite: 'strict',
        });
        router.push('/dashboard');
        setLoading(false);
      } else if (response.status === 401) {
        setError(data.message);
        setIsModalOpen(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error Login');
      }
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return {
    formData,
    loading,
    error,
    isModalOpen,
    closeModal,
    handleChange,
    handleLogin,
  };
}
