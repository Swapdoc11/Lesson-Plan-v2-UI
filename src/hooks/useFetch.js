import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
       const resp= await axios
          .get(url)
          .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            setError(err);
        });
        console.log(resp.data);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetch();
  }, [url]);
  const refetch = async () => {
    setLoading(true);
    try {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setError(err);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return {data,loading,error,refetch}
};

export default useFetch;
