import { useRef } from "react";
import searchbar from "../css/searchbar.module.css";
import useFetch from "./Hooks/useFetch";

function SearchBar() {
  const searchQuery = useRef(null);

  const getQueryParameter = () => {
    if (!searchQuery.current.value) return searchQuery.current.focus();
    return searchQuery.current.value;
  };

  const fetchResults = (queryParam) => {
    const {
      data: newsData,
      loading: newsIsLoading,
      err: newsFetchErr,
    } = useFetch(api, {
      ...params,
      q: queryParam,
    });
  };

  return (
    <>
      <section className={searchbar.container}>
        <input
          type="search"
          name="search_query"
          id="search_query"
          ref={searchQuery}
          className={searchbar.input}
        />
        <button
          type="submit"
          className={searchbar.btn}
          onClick={(e) => {
            getQueryParameter();
            fetchResults();
          }}
        >
          Search
        </button>
      </section>
    </>
  );
}

export default SearchBar;
