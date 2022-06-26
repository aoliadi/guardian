import style from "../css/news.module.css";
import article from "../css/article.module.css";
import useMap from "./Hooks/useMap";
import useRandom from "./Hooks/useRandom";
import useFetch from "./Hooks/useFetch";

function Test({ newsArr }) {
  const unsplashAPI = `https://api.unsplash.com/photos`;
  const unsplashParams = {
    client_id: "khjyPe4b-GQR9I_WB0jw4cZDN_inbfU685jsV-AtKeI",
  };
  const { data: imgData, err } = useFetch(unsplashAPI, unsplashParams);
  const imgUrls = imgData && imgData.map((item) => item.urls.small_s3);

  const index = useRandom(newsArr.length);
  const news = [...newsArr];
  // const news = useMap(
  //   [...data].splice(Math.floor(Math.random() * data.length), 2)
  // );
  const others = useMap(news, "horizontal", imgUrls);
  return (
    <div className="">
      {/* <div>{}</div> */}
      <div className={article.wrapper}>
        <div className={article.wrapper}>
          <header className={article.header}>
            <h1 className={article.title}>Sports</h1>
          </header>
          <div className={article.cards}>
            <section className={article.four_cards}>{others}</section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
