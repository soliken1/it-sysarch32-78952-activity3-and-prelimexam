import React from "react";

function Pagination({ currentPage, totalPages, fetchPreviousPage, fetchNextPage, setCurrentPage }) {
  return (
    <div className="pagebanner">
      {currentPage > 1 && ( 
        <button className="backPage" onClick={fetchPreviousPage}>Previous Page</button>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
        key={page}
        className={`pagebtns ${currentPage === page ? "currentPage" : "pageNumber"}`}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
      
      ))}
      {currentPage < totalPages && ( 
        <button className="nextPage" onClick={fetchNextPage}>Next Page</button>
      )}
    </div>
  );
}

export default Pagination;
