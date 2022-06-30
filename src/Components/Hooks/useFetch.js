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
    axios
      // .get(api, {
      .get(url, {
        params,
      })
      .then((res) => {
        // console.log(res);
        setData(res.data);
        // setData(res[theData]);
        setLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(true);
      });
  }, [url]);
  // console.log(data);
  return { data, loading, err };
};

export default useFetch;
