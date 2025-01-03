import React from 'react';

export default function DashboardHome() {
  return (
    <>
      <section>
        <div className='header-dash py-3'>
          <h1 className='text-2xl font-bold text-black'>Dashboard</h1>
        </div>
        <div className='list-card grid grid-cols-3 gap-5'>
          <div className='card rounded-lg bg-black p-4'>
            <p className='text-white'>Post</p>
            <h1 className='text-5xl font-bold text-white'>30</h1>
          </div>
          <div className='card rounded-lg bg-black p-4'>
            <p className='text-white'>Staff</p>
            <h1 className='text-5xl font-bold text-white'>9</h1>
          </div>
          <div className='card rounded-lg bg-black p-4'>
            <p className='text-white'>Member</p>
            <h1 className='text-5xl font-bold text-white'>22</h1>
          </div>
        </div>
      </section>
    </>
  );
}
