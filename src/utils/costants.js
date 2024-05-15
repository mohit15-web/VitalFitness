import axios from "axios";
import { useEffect, useState } from "react";

function useFetch({ method = "get", url = ""}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      method: method,
      url: url,
      headers: {
        'X-RapidAPI-Key': '8ce4b5dc5amshd2616c289702ce1p1ffeffjsna5ad3d2de041',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [url]);

  return [data, loading, error];
}

export default useFetch;