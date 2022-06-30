import article from "../css/article.module.css";
import general from "../css/general.module.css";
import Test from "./Test";
import useFetch from "./Hooks/useFetch";
import { useEffect, useState } from "react";

function Main() {
  // const [category, setCategory] = useState([
  const category = ["sports", "politics", "entertainment"];
  const [newsState, setnewsState] = useState({
    api: `https://content.guardianapis.com/search`,
    params: {
      "api-key": "db0f505c-2e61-417a-b77b-925796f744d7",
      "page-size": 20,
    },
  });
  // newsState.api = "http://localhost:8000/response";
  const unsplashState = {
    api: `https://api.unsplash.com/photos`,
    params: {
      client_id: "khjyPe4b-GQR9I_WB0jw4cZDN_inbfU685jsV-AtKeI",
    },
  };
  const {
    data: newsData,
    loading: newsIsLoading,
    err: newsFetchErr,
    // } = useFetch(newsState);
  } = useFetch(newsState.api, newsState.params);
  const { data: imgData, err: imgFetchErr } = useFetch(
    unsplashState.api,
    unsplashState.params
  );
  const imgUrls = imgData && imgData.map((item) => item.urls.small_s3);

  // console.log(newsData);

  return (
    <main className={general.container}>
      <div className={article.wrapper}>
        {newsFetchErr && <h1 className="">{newsFetchErr}</h1>}
        {newsIsLoading ||
          category.map((item, index) => {
            console.log(newsData.results);
            return (
              <Test
                key={index}
                newsArr={newsData.results}
                category={item}
                imgUrls={imgUrls}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Main;
