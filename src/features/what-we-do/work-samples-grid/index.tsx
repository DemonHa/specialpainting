"use client";
import React, { useState, useMemo } from "react";
import FilterTabs from "./filter-tabs";
import PortfolioGrid from "./portfolio-grid";
import defaultFilters from "./utils/default-filters";
import { portfolioGridData } from "./utils/portfolio-grid-data";
import Pagination from "./pagination";

export type FilterTypes = {
  interior: boolean;
  exterior: boolean;
};

export type FilterSchemaTypes = {
  residential: FilterTypes;
  commercial: FilterTypes;
  isClean: boolean;
  [key: string]: any;
};

const WorkSamplesGrid = () => {
  const [filters, setFilters] = useState<FilterSchemaTypes>(defaultFilters);
  const [gridView, setGridView] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredData = useMemo(() => {
    if (filters.isClean) {
      return portfolioGridData;
    }
    return portfolioGridData.filter(
      (item) => filters[item.outerFilter][item.innerFilter],
    );
  }, [filters]);

  const currentPageData = useMemo(() => {
    const initialIndex = (currentPage - 1) * 6;
    const endIndex = initialIndex + 5;
    return filteredData.filter(
      (item, index) => index >= initialIndex && index <= endIndex,
    );
  }, [filteredData, currentPage]);

  return (
    <div className="flex flex-col">
      <FilterTabs
        filters={filters}
        setFilters={setFilters}
        gridView={gridView}
        setGridView={setGridView}
        totalCount={filteredData.length}
      />
      <PortfolioGrid portofolioData={currentPageData} gridView={gridView} />
      <Pagination
        currentPage={currentPage}
        totalItems={filteredData.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default WorkSamplesGrid;
