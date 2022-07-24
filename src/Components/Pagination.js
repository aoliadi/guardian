import pagination from "../css/pagination.module.css";
import ReactPaginate from "react-paginate";

function Pagination() {
  const items = [...Array(33).keys()];

  return (
    <>
      <ReactPaginate
        pageCount={items.length}
        previousLabel={
          <button className={pagination.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={pagination.pag_icon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        }
        nextLabel={
          <button className={pagination.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={pagination.pag_icon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        }
        onPageChange={(e) => {
          console.log(e);
        }}
        marginPagesDisplayed={2}
        containerClassName={pagination.container}
        pageClassName={pagination.page}
        pageLinkClassName={pagination.page_link}
        activeLinkClassName={pagination.page_link_active}
        hrefBuilder={(item) => `https://twitter.com/aoliadi/${item}`}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
