"use client";

import React, { useState } from 'react'
import FilterTabs from './filter-tabs'
import defaultFilters from './utils/defaultFilters';

export type FilterTypes = {
  interior: boolean;
  exterior: boolean;
}

export type FilterSchemaTypes = {
  residential: FilterTypes;
  comercial: FilterTypes;
  isClean: boolean;
}

const WorkSamplesGrid = () => {

  const [filters, setFilters] = useState<FilterSchemaTypes>(defaultFilters)
  const [gridView, setGridView] = useState<boolean>(true)

  return (
    <div className='flex flex-col'>
      <FilterTabs filters={filters} setFilters={setFilters} gridView={gridView} setGridView={setGridView} />
      <div>Grid Here</div>
    </div>
  )
}

export default WorkSamplesGrid
