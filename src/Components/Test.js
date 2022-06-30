import style from "../css/news.module.css";
import article from "../css/article.module.css";
import useMap from "./Hooks/useMap";
import useRandom from "./Hooks/useRandom";
import useFetch from "./Hooks/useFetch";

function Test({ newsArr, imgUrls, category }) {
  // const index = useRandom(newsArr.length);
  // console.log(newsArr);
  const news = [...newsArr];
  // const news = useMap(
  //   [...data].splice(Math.floor(Math.random() * data.length), 2)
  // );
  const newsItems = useMap(news, "horizontal", imgUrls);
  return (
    <div className="">
      {/* <div>{}</div> */}
      {/* <div className={article.wrapper}> */}
      <div className={article.wrapper}>
        <header className={article.header}>
          <h1 className={article.title}>{category}</h1>
        </header>
        <div className={article.cards}>
          <section className={article.four_cards}>{newsItems}</section>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Test;
