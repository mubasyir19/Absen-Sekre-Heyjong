import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { ListAttendance } from '@/data-types';

export default function useFetchAttendance() {
  const [dataAttendance, setDataAttendance] = useState<ListAttendance[] | null>(null);

  useEffect(() => {
    async function fetchDataAttendance() {
      try {
        const token = Cookies.get('authToken') ?? '';
        const jwtToken = atob(token);

        const fetchata = await fetch(`${process.env.NEXT_PUBLIC_API_HEYJONG_ATTENDANCE}/attendance`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const response = await fetchata.json();
        setDataAttendance(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDataAttendance();
  }, []);

  return dataAttendance;
}
