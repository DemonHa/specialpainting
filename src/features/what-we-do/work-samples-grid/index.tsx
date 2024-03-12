"use client";
import React, { useState, useMemo } from 'react';
import FilterTabs from './filter-tabs';
import defaultFilters from './utils/default-filters';
import PortfolioGrid from './portfolio-grid';
import { portfolioGridData } from './utils/portfolio-grid-data';

export type FilterTypes = {
  interior: boolean;
  exterior: boolean;
};

export type FilterSchemaTypes = {
  residential: FilterTypes;
  comercial: FilterTypes; 
  isClean: boolean;
  [key: string]: any;
};

const WorkSamplesGrid = () => {
  const [filters, setFilters] = useState<FilterSchemaTypes>(defaultFilters);
  const [gridView, setGridView] = useState<boolean>(true);

  const filteredData = useMemo(() => {
    if (filters.isClean) {
      return portfolioGridData
    }
    return portfolioGridData.filter((item) => filters[item.outerFilter][item.innerFilter]);
  }, [filters]);

  return (
    <div className='flex flex-col'>
      <FilterTabs filters={filters} setFilters={setFilters} gridView={gridView} setGridView={setGridView} totalCount={filteredData.length}/>
      <PortfolioGrid portofolioData={filteredData} gridView={gridView} />
    </div>
  );
};

export default WorkSamplesGrid;
