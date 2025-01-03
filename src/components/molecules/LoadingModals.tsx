import { CirclesWithBar } from 'react-loader-spinner';

export default function LoadingModals() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-1/2 rounded-lg bg-white p-6 md:w-1/4'>
        <div className='flex items-center justify-center'>
          <CirclesWithBar
            height='100'
            width='100'
            color='#007AFC'
            outerCircleColor='#007AFC'
            innerCircleColor='#007AFC'
            barColor='#007AFC'
            ariaLabel='circles-with-bar-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
        <p className='mt-2 text-center text-3xl font-semibold text-black'>Loading</p>
      </div>
    </div>
  );
}
