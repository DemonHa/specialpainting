import React from "react";
import { MdOutlineGridView } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import CustomSelect from "./custom-select";
import ExpandableMenu from "./expandable-menu";
import { FilterSchemaTypes } from "..";
import defaultFilters from "../utils/default-filters";

type PropTypes = {
  filters: FilterSchemaTypes;
  gridView: boolean;
  setFilters: React.Dispatch<React.SetStateAction<FilterSchemaTypes>>;
  setGridView: React.Dispatch<React.SetStateAction<boolean>>;
  totalCount: number;
};

const FilterTabs = ({
  filters,
  gridView,
  setFilters,
  setGridView,
  totalCount,
}: PropTypes) => {
  return (
    <div className="flex divide-x dark:divide-slate-700 divide-gray-300 border-b dark:border-slate-700 border-gray-300">
      <div className="flex flex-1 divide-x dark:divide-slate-700 divide-gray-300 justify-center max-md:hidden">
        <ExpandableMenu
          filters={filters}
          setFilters={setFilters}
          type="comercial"
          screenSize="big"
        />
        <ExpandableMenu
          filters={filters}
          setFilters={setFilters}
          type="residential"
          screenSize="big"
        />
      </div>
      <div className="w-full hidden max-md:flex">
        <CustomSelect
          filters={filters}
          setFilters={setFilters}
          totalCount={totalCount}
        />
      </div>
      <div className="flex md:w-[65vw] justify-between divide-x dark:divide-slate-700 divide-gray-300">
        <div className="flex flex-1 max-md:hidden">
          <div
            onClick={() => {
              setFilters(defaultFilters);
            }}
            className={`flex px-8 text-[16px] underline items-center cursor-pointer ${filters.isClean && "hidden"}`}
            style={{ textUnderlineOffset: "4px" }}
          >
            Clear all
          </div>
        </div>
        <div className="flex divide-x dark:divide-slate-700 divide-gray-300 justify-between w-[15ch] items-center max-sm:hidden">
          <div
            onClick={() => {
              setGridView(true);
            }}
            className={`h-full w-full flex justify-center items-center cursor-pointer ${gridView ? "opacity-[1]" : "opacity-[0.5]"}`}
          >
            <MdOutlineGridView size={30} />
          </div>
          <div
            onClick={() => {
              setGridView(false);
            }}
            className={`h-full w-full flex justify-center items-center cursor-pointer ${gridView ? "opacity-[0.5]" : "opacity-[1]"}`}
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
