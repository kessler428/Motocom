import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Data } from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { paginationInventory } from "../../../redux/thunks";
import { GridFooter } from "./GridFooter";

import "../../PaginationStyle.css";

export const PaginationInventory = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {

    dispatch(paginationInventory(pageSize, pageNumber));
  }, [dispatch, pageSize, pageNumber]);

  const { listInventory, pagination } = useSelector((state) => state.inventory)

  const { totalItems } = pagination;

  let TotalItems;

  if (totalItems === undefined) {
    TotalItems = "";
  } else {
    TotalItems = totalItems;
  }

  const usersPerPage = pageSize;

  const showData = listInventory.map((item) => {
    return <Data key={item.id} {...item} />;
  });

  const pageCount = Math.ceil(TotalItems / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="">{showData}</div>
      <div className="mb-1">
        <ReactPaginate
          previousLabel={"< Anterior"}
          nextLabel={"Siguiente >"}
          breakLabel={"..."}
          marginPagesDisplayed={0}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      <GridFooter setPageSize={setPageSize} />
    </>
  );
};
