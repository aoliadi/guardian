import { useEffect, useRef, useState } from "react";
import WebFont from "webfontloader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import searchbar from "../css/searchbar.module.css";

function App() {
  const category = ["sports", "lifestyle", "politics", "business"];

  // const newsParams = {
  //   api: `https://guardian-blog.herokuapp.com/guardian`,
  //   params: {
  //     _page: 1,
  //   },
  // };

  const newsParams = {
    api: `https://content.guardianapis.com/search`,
    params: {
      "api-key": "db0f505c-2e61-417a-b77b-925796f744d7",
      "page-size": 5,
      "order-by": "newest",
      "show-fields": "trailText,thumbnail,byline,shortUrl",
    },
  };

  const queryParameterRef = useRef(null);
  const [queryParameter, setQueryParameter] = useState(null);

  const getQueryParameterRefValue = () => {
    if (!queryParameterRef.current.value)
      return queryParameterRef.current.focus();
    return queryParameterRef.current.value;
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
      <>
        <form action="" className={searchbar.container}>
          <input
            type="search"
            name="search_query"
            id="search_query"
            ref={queryParameterRef}
            className={searchbar.input}
          />
          <button
            type="submit"
            className={searchbar.btn}
            onClick={(e) => {
              e.preventDefault();
              let query = getQueryParameterRefValue();
              if (query) {
                setQueryParameter([query]);
              }
            }}
          >
            Search
          </button>
        </form>
      </>
      <Main
        newsParams={newsParams}
        category={queryParameter ?? category}
        isQuery={Boolean(queryParameter)}
      />
      <Footer />
    </div>
  );
}

export default App;
