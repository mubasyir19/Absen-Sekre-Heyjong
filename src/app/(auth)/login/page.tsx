'use client';

import ErrorModals from '@/components/molecules/ErrorModals';
import LoadingModals from '@/components/molecules/LoadingModals';
import useLoginForm from '@/hooks/auth/useLoginForm';

export default function LoginPage() {
  const { formData, loading, error, isModalOpen, closeModal, handleChange, handleLogin } = useLoginForm();

  return (
    <section className='flex h-screen w-full'>
      <div className='hidden h-full w-1/2 bg-jong bg-cover md:block'>
        <div className='h-full w-full bg-black bg-opacity-50'></div>
      </div>
      <div className='relative flex h-full w-full flex-col items-center justify-center md:w-1/2'>
        <div className='w-full px-10 md:w-3/5'>
          <div className='w-full text-start'>
            <p>Welcome back!👋</p>
            <h3 className='text-2xl font-bold text-black'>Login to your account</h3>
          </div>
          <form className='mt-8 flex flex-col gap-y-4' onSubmit={handleLogin}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                placeholder='Enter your username'
                className='w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-secondary-blue focus:outline-none'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                placeholder='Enter your password'
                className='w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-secondary-blue focus:outline-none'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='w-full rounded-lg bg-red-jong py-2 text-base text-white hover:bg-secondary-blue'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {loading && <LoadingModals />}
      {error && (
        <ErrorModals isOpen={isModalOpen} onClose={closeModal} title='An Error Occured'>
          <p>{error}</p>
        </ErrorModals>
      )}
    </section>
  );
}
