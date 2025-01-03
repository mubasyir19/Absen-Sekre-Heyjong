import { Attendance } from '@/data-types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function useSubmitAttendance() {
  const router = useRouter();
  const [formData, setFormData] = useState<Attendance>({
    name: '',
    position: '',
    institution: '',
    purpose: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  const handleSubmitAttendance = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HEYJONG_ATTENDANCE}/attendance/add`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push(`/success`);
        setLoading(false);
      } else if (response.status === 401) {
        setError(data.message);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.log('ini error = ', error);
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

  return {
    formData,
    loading,
    error,
    isModalOpen,
    handleChange,
    closeModal,
    handleSubmitAttendance,
  };
}
