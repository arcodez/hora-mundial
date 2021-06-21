import { Fragment, useState } from "react";
import { useGetCountrys } from "../../hooks/useGetCountrys";

export function ListOfCountry() {
  const { loading, country } = useGetCountrys();

  return (
    <Fragment>
      Lista de Paises
      {loading ? (
        <h1>Esta Cargando</h1>
      ) : (
        country.map((pais, index) => (
          <Fragment key={index}>
            <p>{pais}</p>
          </Fragment>
        ))
      )}
    </Fragment>
  );
}
