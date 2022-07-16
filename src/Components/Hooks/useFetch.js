import { useState, useEffect } from "react";
import axios from "axios";

// const useFetch = ({ api, params, category }) => {
const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // console.log(category);
  // console.log(params);

  useEffect(() => {
    function fetchWithAxios() {
      axios
        .get(url, {
          params,
        })
        .then((res) => {
          setData(res.data);
          // setData(res);

          setLoading(false);
          setErr(null);
        })
        .catch((err) => {
          setErr(err.message);
          setLoading(true);
        });
    }

    fetchWithAxios();
  }, [url]);
  // console.log(data);
  return { data, loading, err };
};

export default useFetch;
