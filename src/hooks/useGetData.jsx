import { useState, useEffect } from "react";

export function useGetData(url) {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://worldtimeapi.org/api/timezone/${url}`);
      const data = await res.json();
      setValues(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return [values, loading];
}
