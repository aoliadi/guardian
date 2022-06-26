// import styles from "../css/article.module.css";
import general from "../css/general.module.css";
// import News from "./News";
import Test from "./Test";
import useFetch from "./Hooks/useFetch";
import useRandom from "./Hooks/useRandom";
import { useEffect } from "react";

function Main() {
  // const category = ["sports", "politics", "entertainment"];
  const theGuardianAPI = `https://content.guardianapis.com/search`;
  const theGuardianParams = {
    "api-key": "db0f505c-2e61-417a-b77b-925796f744d7",
    "page-size": 25,
  };
  const { data, loading, err } = useFetch(theGuardianAPI, theGuardianParams);

  return (
    <main className={general.container}>
      {err && <h1 className="">{err}</h1>}
      {loading || <Test newsArr={data.response.results} />}
    </main>
  );
}

export default Main;
