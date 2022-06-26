import { useState, useEffect } from "react";
import style from "../../css/news.module.css";

function useMap(data, orientation) {
  const [theNews, setTheNews] = useState(null);

  useEffect(() => {
    switch (orientation) {
      case "vertical":
      case "horizontal":
        // setTheNews("empty!");
        setTheNews(
          data.map((news) => (
            <article className={`style.${orientation}`} key={news.id}>
              <div className={style.img__container}>
                <a href={news.webUrl} className=""></a>
              </div>
              <div className={style.content__container}>
                <h4 className={style.title}>
                  <a href={news.webUrl} className={style.link}>
                    {news.webTitle}
                  </a>
                </h4>
                <small className={style.timestamp}>3 mins ago</small>
              </div>
            </article>
          ))
        );
        break;
      default:
        setTheNews(
          data.map((news) => (
            // <section className={article.one_card}>{oneCard}</section>
            <article className={style.only} key={news.id}>
              <small className={style.author}>
                by author name <span className=""></span>{" "}
                {news.webPublicationDate}
              </small>
              <h1 className={style.title}>
                <a href={news.webUrl} className={style.link}>
                  {news.webTitle}
                </a>
              </h1>
            </article>
          ))
        );
    }
  }, []);

  return theNews;
}

export default useMap;
