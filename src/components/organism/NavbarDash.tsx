'use client';

import { Bars3Icon, UserIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
// import { jwtDecode } from 'jwt-decode';

// interface User {
//   id: string;
//   name: string;
//   username: string;
// }

export default function NavbarDash() {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLogout = () => {
    Cookies.remove('authToken');
    router.push('/login');
  };

  // useEffect(() => {
  //   const token = Cookies.get('authToken');

  //   if (token) {
  //     const jwtToken = atob(token);
  //     const jwtPayload = jwtDecode<User>(jwtToken);
  //     setUser(jwtPayload);
  //   }
  // }, []);

  return (
    <nav className='flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-xl'>
      <div className=''>
        <button>
          <Bars3Icon className='h-6' />
        </button>
      </div>
      <div className='flex gap-x-3 items-center'>
        <button onClick={handleOpenMenu} className='relative flex items-center px-4 gap-x-2 bg-gray-100'>
          <UserIcon className='h-5 w-auto text-secondary-blue' />
          {/* <p>{user?.username}</p> */}
          <p>Admin</p>
          {isOpenMenu && (
            <div className='absolute top-full left-0 w-full bg-black'>
              <ul>
                <li>
                  <button
                    onClick={handleLogout}
                    className='flex items-center gap-x-2 px-2 w-full py-2 duration-150 hover:text-white'
                  >
                    <ArrowRightStartOnRectangleIcon className='h-5 w-fit text-white' />
                    <span className='text-sm text-white'>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
