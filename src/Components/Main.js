// import styles from "../css/article.module.css";
import general from "../css/general.module.css";
// import News from "./News";
import Test from "./Test";
import useFetch from "./Hooks/useFetch";
import useRandom from "./Hooks/useRandom";
import { useEffect } from "react";

function Main() {
  const url = `http://localhost:8000/response`;
  const { data, loading, err } = useFetch(url);
  // debugger;

  // const category = ["sports", "politics", "entertainment"];
  // const amount = [2, 4, 5, 6, 7, 8];
  // const chosenCategory = category[2];
  // const amountOfNews = amount[useRandom(amount.length)];
  // const amountOfNews = amount[2];
  // const chosenCategory = category[useRandom(category.length)];
  // useEffect(() => {
  // console.log(chosenCategory);
  // }, []);

  // const randomNumber = Math.floor(Math.random() * data.length);

  // const state = [[1, 1], [2, 2], 5, 6, 7, 8];

  return (
    <main className={general.container}>
      {err && <h1 className="">{err}</h1>}
      {loading || <Test data={data} />}
    </main>
  );
}

export default Main;
