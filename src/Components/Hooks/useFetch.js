import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
        // setData(res[theData]);
        setLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(true);
      });
  }, []);

  return { data, loading, err };
};

export default useFetch;
