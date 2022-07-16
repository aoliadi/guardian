// import style from "../css/news.module.css";
import article from "../css/article.module.css";
import useMap from "./Hooks/useMap";
import useRandom from "./Hooks/useRandom";
import useFetch from "./Hooks/useFetch";
import { useState } from "react";
import style from "../css/news.module.css";
import Moment from "react-moment";

// function Test({ newsArr, imgUrls, category }) {
function Test({ newsParams, category }) {
  const { api, params } = newsParams;
  const {
    data: newsData,
    loading: newsIsLoading,
    err: newsFetchErr,
  } = useFetch(api, {
    ...params,
    q: category,
  });
  // const newsArr = newsData.response.results;

  return (
    <>
      <div className={article.wrapper}>
        <header className={article.header}>
          <h1 className={article.title}>{category}</h1>
        </header>
        <div className={article.cards}>
          <section className={article.four_cards}>
            {newsIsLoading ||
              newsData.response.results.map((news) => (
                <article className={style.horizontal} key={news.id}>
                  <div className={style.img__container}>
                    <a href={news.webUrl} className=""></a>
                  </div>
                  <div className={style.content__container}>
                    <h4 className={style.title}>
                      <a href={news.webUrl} className={style.link}>
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
      </div>
    </>
  );
}

export default Test;
