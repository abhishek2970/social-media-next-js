import React from 'react'
import { useReactTable } from '@tanstack/react-table';
import data from './constants/data.json'; // Assuming data.json is in the same directory
export const page = () => {
    const table = useReactTable({});
  return (
    <div>page</div>
  )
}
