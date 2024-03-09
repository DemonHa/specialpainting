'use client';

import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ExpandableMenu from '../expandable-menu';
import defaultFilters from '../../utils/defaultFilters';
import { FilterSchemaTypes } from '../..';

type PropTypes = {
  filters: FilterSchemaTypes;
  setFilters: React.Dispatch<React.SetStateAction<FilterSchemaTypes>>;
}

const CustomSelect = ({ filters, setFilters }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='divide-y divide-slate-700 w-full'>
      <div onClick={() => setIsOpen((prev) => !prev)} className='py-5 px-3 w-full cursor-pointer'>
        Filter by...
      </div>
      <div className={`w-[100vw] absolute flex flex-col left-0 top-0 h-[100dvh] dark:bg-background-dark z-20 space-y-4 ${!isOpen && 'hidden'}`}>
        <div className='flex justify-between text-4xl items-center px-5 pt-4'>
          <div>Filters</div>
          <button onClick={() => { setIsOpen(false) }}>
            <IoCloseSharp size={35} />
          </button>
        </div>
        <div className='flex flex-col flex-1 items-center'>
          <div className='flex flex-col w-full'>
          <ExpandableMenu type='residential' filters={filters}  setFilters={setFilters} screenSize='small' className='border-t border-b border-slate-700'/>
          <ExpandableMenu type='comercial' filters={filters}  setFilters={setFilters} screenSize='small'className='border-b border-slate-700'/>
          </div>
          <div className='flex flex-1 justify-center items-end py-8'>
            <div onClick={() => setFilters(defaultFilters)} className={`text-base underline ${filters.isClean && 'hidden'}`} style={{ textUnderlineOffset: '4px' }}>Clear all</div>
          </div>
          <button className='py-5 text-center bg-orange-500 w-full'>
            View Results (17)
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomSelect
