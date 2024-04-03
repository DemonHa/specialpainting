import React, { useMemo } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Pagination = ({
  currentPage,
  totalItems,
  setCurrentPage,
}: {
  currentPage: number;
  totalItems: number;
  setCurrentPage: React.Dispatch<number>;
}) => {
  const totalPages = useMemo(() => Math.ceil(totalItems / 6), [totalItems]);
  const pages = useMemo(() => new Array(totalPages).fill(""), [totalPages]);

  const handlePageChange = (newpage: number) => {
    setCurrentPage(newpage);
  };

  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    return;
  };

  const incrementPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
    return;
  };

  return (
    <div className="flex justify-start">
      <div
        onClick={decrementPage}
        className="p-4 cursor-pointer hover:bg-gray-400 border-r dark:border-slate-700 border-gray-300"
      >
        <MdOutlineKeyboardArrowLeft size={"1.5rem"} />
      </div>
      {pages.map((page, index) => {
        return (
          <div
            onClick={() => {
              handlePageChange(index + 1);
            }}
            key={index}
            className={`px-6 py-4 cursor-pointer  border-r dark:border-slate-700 border-gray-300 ${currentPage === index + 1 ? "bg-filter-dark text-red-500" : " hover:bg-gray-400"}`}
          >
            {index + 1}
          </div>
        );
      })}
      <div
        onClick={incrementPage}
        className="p-4 cursor-pointer hover:bg-gray-400 border-r dark:border-slate-700 border-gray-300"
      >
        <MdOutlineKeyboardArrowRight size={"1.5rem"} />
      </div>
    </div>
  );
};

export default Pagination;
