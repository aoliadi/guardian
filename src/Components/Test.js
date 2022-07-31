import style from "../css/news.module.css";
import article from "../css/article.module.css";
import pagination from "../css/pagination.module.css";
import useFetch from "./Hooks/useFetch";
import Moment from "react-moment";
import ReactPaginate from "react-paginate";
import { useState } from "react";

function Test({ newsParams, category, isQuery }) {
  const items = [...Array(10).keys()];
  const [currentPage, setCurrentPage] = useState(1);

  const { api, params } = newsParams;
  const {
    data: newsData,
    loading: newsIsLoading,
    err: newsFetchErr,
  } = useFetch(api, params);

  // {
  // ...params,
  // page: currentPage,
  // q: category,
  // }
  // );

  return (
    <>
      <div className={article.wrapper}>
        <header className={article.header}>
          <h1 className={article.title}>
            {isQuery ? `search results of '${category}'` : category}
          </h1>
        </header>
        <div className={article.cards}>
          <section className={article.four_cards}>
            {newsFetchErr && <h1 className="">{newsFetchErr}</h1>}

            {newsIsLoading ||
              newsData.map((news) => (
                <article className={style.horizontal} key={news.id}>
                  <div className={style.img__container}>
                    <a
                      href={news.link}
                      className=""
                      style={{
                        backgroundImage: `url()`,
                      }}
                    ></a>
                  </div>
                  <div className={style.content__container}>
                    <h4 className={style.title}>
                      <a href={news.link} className={style.link}>
                        {news.title.rendered}
                      </a>
                    </h4>
                    <small className={style.timestamp}>
                      <Moment fromNow>{news.date}</Moment>
                    </small>
                  </div>
                </article>
              ))}
            {/* {newsIsLoading ||
              newsData.response.results.map((news) => (
                <article className={style.horizontal} key={news.id}>
                  <div className={style.img__container}>
                    <a
                      href={news.webUrl}
                      className=""
                      style={{
                        backgroundImage: `url(${news.fields.thumbnail})`,
                      }}
                    ></a>
                  </div>
                  <div className={style.content__container}>
                    <h4 className={style.title}>
                      <a href={news.fields.shortUrl} className={style.link}>
                        {news.webTitle}
                      </a>
                    </h4>
                    <small className={style.timestamp}>
                      <Moment fromNow>{news.webPublicationDate}</Moment>
                    </small>
                  </div>
                </article>
              ))} */}
          </section>
        </div>
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
              setCurrentPage(e.selected + 1);
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
      </div>
    </>
  );
}

export default Test;
