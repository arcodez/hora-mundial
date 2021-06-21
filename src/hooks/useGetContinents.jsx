import { useState, useEffect } from "react";
import { useGetData } from "./useGetData";

export function useGetContinents() {
  const [continentes, loading] = useGetData("");
  const [continente, setContinente] = useState([]);

  useEffect(() => {
    //var pais = ["America/Venezuela", "America/Argentina"];
    let Continente = continentes; 
    let arr = [];
    for (let i = 0, len = Continente.length; i < len; i++) {
      arr[i] = Continente[i].split("/")[0];
    }
    let arrContinente = arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });

    setContinente(arrContinente);
  }, [continentes]);

  return { continente, loading };
}
