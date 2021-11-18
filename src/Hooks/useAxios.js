import axios from "axios";
import { useState, useEffect } from "react";
const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
   
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, [url]);
 console.log(data);
  return { data,  error };
};
export default useAxios;
