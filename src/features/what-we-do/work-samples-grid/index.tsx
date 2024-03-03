"use client";

import React, { useState } from 'react'
import FilterTabs from './filter-tabs'

const WorkSamplesGrid = () => {


  const [filters, setFilters] = useState(null)

  return (
    <div className='flex flex-col'>
      <FilterTabs filters={filters} setFilters={setFilters}/>
      <div>Grid Here</div>
    </div>
  )
}

export default WorkSamplesGrid
