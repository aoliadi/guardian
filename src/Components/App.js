import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import WebFont from "webfontloader";
import SearchBar from "./SearchBar";
import searchbar from "../css/searchbar.module.css";

function App() {
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

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rozha One", "Josefin Sans", "Lato", "Coustard"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchBar newsParams={newsParams} category={category} />
      <Main
        newsParams={newsParams}
        category={queryParameter ? queryParameter : category}
      />
      <Footer />
    </div>
  );
}

export default App;
