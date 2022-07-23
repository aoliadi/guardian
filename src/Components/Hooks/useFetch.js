import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    function fetchWithAxios() {
      axios
        .get(url, {
          params,
        })
        .then((res) => {
          setData(res.data);
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

  return { data, loading, err };
};

export default useFetch;
