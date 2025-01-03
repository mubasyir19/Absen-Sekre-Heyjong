import React, { ReactNode } from 'react';

interface ErrorModalsProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function ErrorModals({ isOpen, title, children, onClose }: ErrorModalsProps) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
      <div className='w-1/2 rounded-lg bg-white p-6 text-center md:w-fit' data-aos='fade-up'>
        <h3 className='text-3xl font-bold text-black'>{title}</h3>
        <div className='my-4 text-center'>{children}</div>
        <button onClick={onClose} className='rounded-md bg-red-500 px-4 py-2 text-base font-semibold text-white'>
          Close
        </button>
      </div>
    </div>
  );
}
