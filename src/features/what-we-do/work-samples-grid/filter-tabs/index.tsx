import React, { useCallback } from "react";
import { MdOutlineGridView } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { WwdHeader } from "../wwd-header";
import { Dissapear } from "../wwd-header/dissapear/dissapear";

type FilterTypes = "comercial" | "residential";

type Filters = null | FilterTypes[];

type PropTypes = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<null | FilterTypes[]>>;
};

const FilterTabs = ({ filters, setFilters }: PropTypes) => {
  const filterChange = (currFilters: Filters, newFilter: FilterTypes) => {
    if (!currFilters) {
      return [newFilter];
    } else {
      const productExists = Boolean(
        currFilters.find((item) => item === newFilter),
      );
      if (productExists) {
        return currFilters.filter((item) => item === newFilter);
      } else {
        return [...currFilters, newFilter];
      }
    }
  };

  const handleFIlterChange = (filterClicked: FilterTypes) => () => {
    setFilters((prevFilters) => filterChange(prevFilters, filterClicked));
  };

  const isFilterSelected = useCallback(
    (filter: FilterTypes) => {
      if (!filters) {
        return false;
      }

      return Boolean(filters.find((currFilter) => currFilter === filter));
    },
    [filters],
  );

  return (
    <div className="flex divide-x divide-slate-700 border-b border-slate-700">
      <div className="flex flex-1 divide-x divide-slate-700 justify-center">
        <div
          onClick={handleFIlterChange("comercial")}
          className={`w-full px-10 py-5 text-[16px] cursor-pointer hover:bg-red-500 ${isFilterSelected("comercial") ? "bg-red-500" : ""}`}
        >
          Comercial
        </div>
        <div
          onClick={handleFIlterChange("residential")}
          className={`w-full px-10 py-5 text-[16px] cursor-pointer hover:bg-red-500 ${isFilterSelected("residential") ? "bg-red-500" : ""}`}
        >
          Residential
        </div>
      </div>
      <div className="flex w-[65vw] justify-between divide-x divide-slate-700">
        <div className="flex flex-1">
          <div className="flex px-8 text-[16px] underline items-center">
            Clear all
          </div>
        </div>
        <div className="flex divide-x divide-slate-700 justify-between w-[15ch] items-center">
          <div className="h-full w-full flex justify-center items-center">
            <MdOutlineGridView size={30} />
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
