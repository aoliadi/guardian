import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(true);
      });
  }, [url]);

  return { data, loading, err };
};

export default useFetch;
