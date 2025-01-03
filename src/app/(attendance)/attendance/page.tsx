'use client';

import Image from 'next/image';
import React from 'react';
import { JongFont } from '@/lib/fonts';
import useSubmitAttendance from '@/hooks/attendance/useSubmitAttendance';
import LoadingModals from '@/components/molecules/LoadingModals';
import ErrorModals from '@/components/molecules/ErrorModals';

export default function AttendanceForm() {
  const { formData, loading, error, isModalOpen, handleChange, closeModal, handleSubmitAttendance } =
    useSubmitAttendance();

  return (
    <>
      <main className='bg-jong bg-center bg-cover w-full h-full'>
        <div className='bg-black bg-opacity-50 h-full w-full p-6'>
          <section className='top-header flex items-center justify-center gap-x-4'>
            <Image src={'/images/logo.png'} width={200} height={200} alt='logo' className='h-12 w-12' />
            <div className={`text-white text-start ${JongFont.className}`}>
              <h4 className='text-xl'>Heyjong</h4>
              <p className='text-xs'>Community</p>
            </div>
          </section>
          <section className='text-white mt-8'>
            <h2 className='text-xl font-semibold'>Kunjungan Sekretariat Heyjong</h2>
            <p className='text-xs mt-2'>Silakan lengkapi data-data berikut dengan benar dan lengkap</p>
          </section>
          <section className='mt-10 text-white'>
            <form className='flex flex-col gap-y-4' onSubmit={handleSubmitAttendance}>
              <div className='group-input'>
                <label htmlFor='name' className='text-base'>
                  Nama Pengunjung
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='border-2 border-white focus:border-red-jong focus:outline-none bg-transparent mt-2 px-4 py-2 rounded-lg w-full'
                  required
                />
              </div>
              <div className='group-input'>
                <label htmlFor='position' className='text-base'>
                  Posisi
                </label>
                <select
                  name='position'
                  id='position'
                  value={formData.position}
                  onChange={handleChange}
                  className='border-2 border-white focus:border-red-jong focus:outline-none bg-transparent mt-2 px-4 py-2 rounded-lg w-full'
                  required
                >
                  <option className='text-black'>Pilih posisi</option>
                  <option className='text-black' value='staff'>
                    Staff Komunitas
                  </option>
                  <option className='text-black' value='member'>
                    Member Komunitas
                  </option>
                  <option className='text-black' value='guest'>
                    Tamu
                  </option>
                </select>
              </div>
              <div className='group-input'>
                <label htmlFor='institution' className='text-base'>
                  Institusi
                </label>
                <input
                  type='text'
                  name='institution'
                  value={formData.institution}
                  onChange={handleChange}
                  className='border-2 border-white focus:border-red-jong focus:outline-none bg-transparent mt-2 px-4 py-2 rounded-lg w-full'
                  required
                />
              </div>
              <div className='group-input'>
                <label htmlFor='purpose' className='text-base'>
                  Keperluan
                </label>
                <textarea
                  name='purpose'
                  id='purpose'
                  rows={5}
                  value={formData.purpose}
                  onChange={handleChange}
                  className='border-2 border-white focus:border-red-jong focus:outline-none bg-transparent mt-2 px-4 py-2 rounded-lg w-full'
                  required
                ></textarea>
              </div>
              <div className='group-input'>
                <button type='submit' className='bg-red-jong hover:bg-red-500 py-2 px-4 w-full rounded-lg'>
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
      {loading && <LoadingModals />}
      {error && (
        <ErrorModals isOpen={isModalOpen} onClose={closeModal} title='An Error Occured'>
          <p>{error}</p>
        </ErrorModals>
      )}
    </>
  );
}
