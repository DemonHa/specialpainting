'use client';

import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ExpandableMenu from '../expandable-menu';
import defaultFilters from '../../utils/default-filters';
import { FilterSchemaTypes } from '../..';

type PropTypes = {
  filters: FilterSchemaTypes;
  setFilters: React.Dispatch<React.SetStateAction<FilterSchemaTypes>>;
  totalCount: number;
}

const CustomSelect = ({ filters, setFilters, totalCount }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  return (
    <div className='divide-y dark:divide-slate-700 divide-gray-300 w-full'>
      <div onClick={() => setIsOpen((prev) => !prev)} className='py-5 px-3 w-full cursor-pointer'>
        Filter by...
      </div>
      <div className={`w-[100vw] absolute flex flex-col left-0 top-0 h-[100dvh] dark:bg-background-dark bg-background-white z-20 space-y-4 ${!isOpen && 'hidden'}`}>
        <div className='flex justify-between text-4xl items-center px-5 pt-4'>
          <div>Filters</div>
          <button onClick={() => { setIsOpen(false) }}>
            <IoCloseSharp size={35} />
          </button>
        </div>
        <div className='flex flex-col flex-1 items-center'>
          <div className='flex flex-col w-full'>
            <ExpandableMenu type='residential' filters={filters} setFilters={setFilters} screenSize='small' className='border-t border-b dark:border-slate-700 border-gray-300' />
            <ExpandableMenu type='comercial' filters={filters} setFilters={setFilters} screenSize='small' className='border-b dark:border-slate-700 border-gray-300' />
          </div>
          <div className='flex flex-1 justify-center items-end py-8'>
            <div onClick={() => setFilters(defaultFilters)} className={`text-base underline ${filters.isClean && 'hidden'}`} style={{ textUnderlineOffset: '4px' }}>Clear all</div>
          </div>
          <button onClick={() => { setIsOpen(false) }} className='py-5 text-center bg-orange-500 w-full'>
            View Results ({totalCount})
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomSelect
