function PageNation({ totalPage, page, setPage }) {
  const visiblePages = 5;
  const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPage, startPage + visiblePages - 1);

  const pageArray = [];
  for (let i = startPage; i <= endPage; i++) {
    pageArray.push(i);
  }

  const handlePageClick = (p) => {
    if (p !== page) setPage(p);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => page > 1 && setPage(page - 1)}
        className="page-arrow"
        disabled={page === 1}
      >
        &lt;
      </button>

      {pageArray.map((p) => (
        <button
          key={p}
          onClick={() => handlePageClick(p)}
          className={`page-button ${p === page ? "active" : ""}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => page < totalPage && setPage(page + 1)}
        className="page-arrow"
        disabled={page === totalPage}
      >
        &gt;
      </button>
    </div>
  );
}

export default PageNation;
