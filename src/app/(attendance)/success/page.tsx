'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SuccessSubmit() {
  const router = useRouter();

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      router.push('/attendance');
    }, 3000);
  }, [router]);

  return (
    <main className='bg-jong bg-center bg-cover w-full h-screen'>
      <div className='bg-black bg-opacity-50 h-full w-full p-6 flex justify-center items-center'>
        <div className='text-center' data-aos='fade-up' data-aos-duration='300'>
          <CheckCircleIcon className='text-emerald-500 h-40 w-40 mx-auto' />
          <p className='text-white text-base mt-4'>Terimakasih telah mengisi form kunjugan sekretariat Heyjong</p>
        </div>
      </div>
    </main>
  );
}
