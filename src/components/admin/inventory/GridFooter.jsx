import React from "react";
import { useSelector } from "react-redux";

export const GridFooter = ({ setPageSize }) => {
  const { pagination } = useSelector((state) => state.inventory);

  const { totalItems, currentPage, totalPages } = pagination;

  const handleSelect = (e) => {
    setPageSize(Number(e.target.value));
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex justify-between m-5 text-gray-500 font-semibold bg-gray-100 py-1 px-0 rounded-lg xl:px-1">
            <select
              onChange={handleSelect}
              className="cursor-pointer bg-gray-100 border-0 outline-none py-2 px-0 tablet:px-2"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <p className="text-1s mt-8 font-medium text-gray-400 hidden lg:block lg:text-2s">
            mostrando {currentPage + 1} - {totalPages} de {totalItems}
          </p>
        </div>
      </div>
    </>
  );
};
