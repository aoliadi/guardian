import style from "../css/news.module.css";
import article from "../css/article.module.css";
import { useEffect, useState } from "react";
import useMap from "./Hooks/useMap";

function Test({ data }) {
  const randomNumber = Math.floor(Math.random() * data.length);
  const onlyNews = data.splice(randomNumber, 1);
  const { theNews: oneCard } = useMap(onlyNews);
  console.log(data);
  console.log(oneCard);

  return (
    <div className="">
      <div className={article.wrapper}>
        <header className={article.header}>
          <h1 className={article.title}>Football</h1>
        </header>
        <div className={article.cards}>
          <section className={article.one_card}>
            {oneCard}
            {/* <article className={news.only}></article> */}
          </section>
          <section className={article.four_cards}>second part</section>
        </div>
      </div>
    </div>
  );
}

export default Test;
