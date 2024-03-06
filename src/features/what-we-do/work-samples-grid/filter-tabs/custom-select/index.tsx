'use client';

import React, { useState } from 'react'

const CustomSelect = () => {
  const [showOptions, setShowOptions] = useState();

  return (
    <div className='divide-y divide-slate-700'>
      <div className='py-5 px-3'>
        Filter by...
      </div>
      <div className='w-[100vw] absolute flex flex-col left-0 h-[70vh] dark:bg-background-dark z-10 space-y-4'>
        <div className='flex justify-between text-2xl items-center px-3 py-2'>
          <div>Filters</div>
          <div>X</div>
        </div>
        <div className='flex flex-col flex-1 items-center'>
          <div className='text-xl border-t-[1px] w-full text-center py-4 border-slate-700'>
            Residential
          </div>
          <div className='text-xl border-y-[1px] w-full text-center py-4 border-slate-700'>
            Comercial
          </div>
          <div className='flex flex-1 justify-center items-end py-8'>
            <div className='text-base underline' style={{ textUnderlineOffset: '4px' }}>Clear all</div>
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
