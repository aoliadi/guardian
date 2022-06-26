import style from "../css/news.module.css";
import article from "../css/article.module.css";

import useMap from "./Hooks/useMap";
import useRandom from "./Hooks/useRandom";

function Test({ data }) {
  // const index = useRandom(data.length);
  const news = [...data];
  // const oneCard = useMap(
  //   news.splice(Math.ceil(Math.random() * data.length), 1)
  // );
  const others = useMap(news, "vertical");
  // console.log(oneCard);
  console.log(others);
  return (
    <div className="">
      {/* <div>{}</div> */}
      <div className={article.wrapper}>
        <div className={article.wrapper}>
          <header className={article.header}>
            <h1 className={article.title}>Sports</h1>
          </header>
          <div className={article.cards}>
            {/* <section className={article.one_card}>{oneCard}</section> */}
            <section className={article.four_cards}>{others}</section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
