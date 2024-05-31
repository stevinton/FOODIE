import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const timeoutId = setTimeout(() => {
      axios.get(url, { cancelToken: source.token })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Request canceled");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
<<<<<<< HEAD
    }, 3000);
=======
    }, 1000);
>>>>>>> 8ba84e33e6264d90c231a394e4e23d4c5755e399

    return () => {
      clearTimeout(timeoutId);
      source.cancel("Request canceled by cleanup");
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
