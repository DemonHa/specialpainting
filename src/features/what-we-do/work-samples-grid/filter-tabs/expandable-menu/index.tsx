import React, { useState, useCallback } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FilterSchemaTypes } from '../../index';
import { IoMdCheckmark } from "react-icons/io";
import defaultFilters from '../../utils/defaultFilters';


type OuterFilterTypes = 'comercial' | 'residential';

type InnerFilterTypes = 'interior' | 'exterior';

type PropTypes = {
  filters: FilterSchemaTypes;
  setFilters: React.Dispatch<React.SetStateAction<FilterSchemaTypes>>;
  type: OuterFilterTypes;
}

const ExpandableMenu = ({ setFilters, filters, type }: PropTypes) => {

  const [hovered, setHovered] = useState(false);


  const isFiltersDefault = (defaultFilters: FilterSchemaTypes, currentFilters: FilterSchemaTypes) => {
    const defaultFiltersValues = Object.values(defaultFilters);
    const currentFiltersValues = Object.values(currentFilters);

    defaultFiltersValues.pop();
    currentFiltersValues.pop();

    return defaultFiltersValues === currentFiltersValues
  }

  const handleFilterChange = (currentFilters: FilterSchemaTypes, outerFilter: OuterFilterTypes, innerFilter: InnerFilterTypes) => {
    //creating a deep clone so we avoid side effects when dealing with object mutations
    const currentFiltersClone = JSON.parse(JSON.stringify(currentFilters));

    const currentFieldValue = currentFiltersClone[outerFilter][innerFilter];

    currentFiltersClone[outerFilter][innerFilter] = !currentFieldValue;

    if (isFiltersDefault(defaultFilters, currentFiltersClone)) {
      return setFilters(defaultFilters)
    } else {
      currentFiltersClone.isClean = false;
    }
    return setFilters(currentFiltersClone)
  }

  const isOuterFilterActivated = (type: OuterFilterTypes) => {
    return Object.values(filters[type]).includes(true)
  }

  const isInnerFilterActivated = (currentFilters: FilterSchemaTypes, innerFilter: InnerFilterTypes, outerFilter: OuterFilterTypes) => {
    return currentFilters[outerFilter][innerFilter]
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }} className='flex flex-col w-full relative'>
      <div className={`flex space-x-1 items-center w-full px-10 py-5 text-[16px] cursor-pointer ${isOuterFilterActivated(type) ? 'bg-red-500' : ' hover:bg-red-300'}`}>
        <div>{capitalizeFirstLetter(type)}</div>
        <div className='pt-1'><IoIosArrowDown /></div>
      </div>
      <div className={`absolute flex-col w-full dark:bg-background-dark top-full z-20 ${!hovered && 'hidden'}`}>
        <div onClick={() => { handleFilterChange(filters, type, 'interior') }} className={`flex items-center space-x-1 px-10 py-5 text-[16px] cursor-pointer hover:text-red-300 border-t border-slate-700 ${isInnerFilterActivated(filters, 'interior', type) && 'text-red-300'}`}>
          {isInnerFilterActivated(filters, 'interior', type) && <IoMdCheckmark />}
          <div>Interior</div>
        </div>
        <div onClick={() => { handleFilterChange(filters, type, 'exterior') }} className={`flex items-center space-x-1 px-10 py-5 text-[16px] cursor-pointer hover:text-red-300 border-t border-slate-700 ${isInnerFilterActivated(filters, 'exterior', type) && 'text-red-300'}`}>
          {isInnerFilterActivated(filters, 'exterior', type) && <IoMdCheckmark />}
          <div>Exterior</div>
        </div>
      </div>
    </div>
  )
}

export default ExpandableMenu
