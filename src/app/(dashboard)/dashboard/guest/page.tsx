'use client';

import { formattedDate } from '@/helper/formatDate';
import useFetchAttendance from '@/hooks/attendance/useFetchAttendance';
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
  createdAt: string;
  name: string;
  position: string;
  institution: string;
  purpose: string;
}

export default function GuestPage() {
  const dataAttendance = useFetchAttendance();
  console.log('Daftar hadir = ', dataAttendance);

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Tanggal',
      // selector: (row) => row.createdAt,
      selector: (row) => formattedDate(row.createdAt),
    },
    {
      name: 'Nama Pengunjung',
      selector: (row) => row.name,
    },
    {
      name: 'Status',
      selector: (row) => row.position,
    },
    {
      name: 'Insitusi',
      selector: (row) => row.institution,
    },
    {
      name: 'Keperluan',
      selector: (row) => row.purpose,
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     name: 'Maher',
  //     position: 'staff',
  //     institution: 'Heyjong Community',
  //     purpose: 'Rapat koordinasi komunitas',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mahdy Mubasyir',
  //     position: 'guest',
  //     institution: 'Gundar',
  //     purpose: 'Kerjasama Seminar BEM',
  //   },
  //   {
  //     id: 3,
  //     name: 'Orang lain',
  //     position: 'guest',
  //     institution: 'Teroris',
  //     purpose: 'ngebom basecamp',
  //   },
  // ];

  const customStyles = {
    header: {
      style: {
        backgroundColor: '#000',
        color: '#ffffff',
        fontWeight: '500',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#000',
        color: '#f1f5f9',
        fontSize: '14px',
      },
    },
  };

  return (
    <main>
      <section className='header-dash py-3'>
        <h1 className='text-2xl font-bold text-black'>Daftar Kunjungan</h1>
      </section>
      <section>
        <DataTable
          columns={columns}
          data={dataAttendance || []}
          pagination
          highlightOnHover
          className='rounded-lg shadow-lg'
          customStyles={customStyles}
        />
      </section>
    </main>
  );
}
