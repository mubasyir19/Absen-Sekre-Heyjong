import { HomeIcon, UsersIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

export default function SidebarDash() {
  return (
    <aside className='w-64 rounded-3xl bg-red-jong px-4'>
      <div className='mt-6 flex items-center gap-x-4'>
        {/* <Image
            src={`/images/logo.jpg`}
            width={200}
            height={200}
            alt="logo"
            className="h-10 w-10 rounded-full border-2 border-secondary-yellow"
          /> */}
        <h2 className='text-lg font-semibold text-white'>Heyjong</h2>
      </div>
      <ul className='mt-8'>
        <li className='rounded-lg px-4 py-2 hover:bg-secondary-yellow'>
          <Link href={`/dashboard`} className='flex items-center gap-x-4 '>
            <HomeIcon className='h-5 text-white' />
            <span className='font-medium text-white'>Dashboard</span>
          </Link>
        </li>
        <li className='list-title py-3 text-sm text-gray-300'>Community</li>
        <li className='rounded-lg px-4 py-2 hover:bg-secondary-yellow'>
          <Link href={`/dashboard/guest`} className='flex items-center gap-x-4 '>
            <UsersIcon className='h-5 text-white' />
            <span className='font-medium text-white'>Daftar Kunjungan</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
