'use client';

import { JongFont } from '@/lib/fonts';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

export default function Home() {
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
        <div className='text-center' data-aos='flip-left'>
          <Image src={'/images/logo.png'} width={200} height={200} alt='logo' className='h-28 w-28 mx-auto' />
          <div className={`text-white mt-5 text-center ${JongFont.className}`}>
            <h4 className='text-5xl'>Heyjong</h4>
            <p className='text-lg'>Community</p>
          </div>
        </div>
      </div>
    </main>
  );
}
