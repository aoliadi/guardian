import style from "../css/news.module.css";
import article from "../css/article.module.css";
import pagination from "../css/pagination.module.css";
import useFetch from "./Hooks/useFetch";
import Moment from "react-moment";

function Test({ newsParams, category, isQuery }) {
  const { api, params } = newsParams;
  const {
    data: newsData,
    loading: newsIsLoading,
    err: newsFetchErr,
  } = useFetch(api, {
    ...params,
    q: category,
  });

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
              ))}
          </section>
        </div>
        <div className={pagination.container}>
          <button class={pagination.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={pagination.pag_icon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <ul className={pagination.pages}>
            <li className={pagination.page}>
              <a href="" className={pagination.page_link}>
                1
              </a>
            </li>
            <li className={pagination.page}>
              <a href="" className={pagination.page_link}>
                2
              </a>
            </li>
            <li className={pagination.page}>
              <a href="" className={pagination.page_link}>
                3
              </a>
            </li>
          </ul>
          <button class={pagination.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={pagination.pag_icon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;
