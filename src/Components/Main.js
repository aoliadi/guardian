import article from "../css/article.module.css";
import general from "../css/general.module.css";
import Test from "./Test";
import useFetch from "./Hooks/useFetch";
import { useEffect, useState } from "react";

function Main() {
  const category = ["football", "politics", "entertainment"];

  const newsParams = {
    api: `https://content.guardianapis.com/search`,
    params: {
      "api-key": "db0f505c-2e61-417a-b77b-925796f744d7",
      "page-size": 15,
      "order-by": "newest",
      "show-fields": "trailText,thumbnail,byline,shortUrl",
    },
  };

  return (
    <main className={general.container}>
      <div className={article.wrapper}>
        {category.map((item, index) => {
          return <Test key={item} newsParams={newsParams} category={item} />;
        })}
      </div>
    </main>
  );
}

export default Main;
