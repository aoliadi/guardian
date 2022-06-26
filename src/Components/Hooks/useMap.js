import { useState, useEffect } from "react";
import Moment from "react-moment";
import style from "../../css/news.module.css";
import useFetch from "./useFetch";

function useMap(newsArr, orientation, imgArr) {
  const [theNews, setTheNews] = useState(null);

  // console.log(imgArr);
  // console.log(images[0].small);
  useEffect(() => {
    setTheNews(
      newsArr.map((news, index) => (
        <article className={style[`${orientation}`]} key={news.id}>
          <div className={style.img__container}>
            <a
              href={news.webUrl}
              className=""
              style={
                {
                  // backgroundImage: `url(${imgArr[index]})`,
                }
              }
            ></a>
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
      ))
    );
  }, []);
  return theNews;
}

export default useMap;
