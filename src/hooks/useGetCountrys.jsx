import { useState, useEffect } from "react";
import { useGetData } from "./useGetData";

export function useGetCountrys() {
  const [countrys, loading] = useGetData("America");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    //var pais = ["America/Venezuela", "America/Argentina"];
    let Continente = countrys;
    let arr = [];
    for (let i = 0, len = Continente.length; i < len; i++) {
      arr[i] = Continente[i].split("/")[1];
    }
    let arrCountry = arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });

    setCountry(arrCountry);
  }, [countrys]);

  return { country, loading };
}
