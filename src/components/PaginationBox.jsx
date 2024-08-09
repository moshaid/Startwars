import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationBox = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="pagination_box">
      <Pagination>
        {[...Array(totalPages).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentPage}
            onClick={() => handlePageChange(page + 1)}
            aria-label={`Pagination page ${page + 1}`}
          >
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default PaginationBox;
