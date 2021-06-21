import { Fragment, useState } from "react";
import { useGetContinents } from "../../hooks/useGetContinents";

export function ListOfContinent() {
  const { loading, continente } = useGetContinents();

  return (
    <Fragment>
      Lista de Paises y Continentes
      {loading ? (
        <h1>Esta Cargando</h1>
      ) : (
        continente.map((pais, index) => (
          <Fragment key={index}>
            <p>{pais}</p>
          </Fragment>
        ))
      )}
    </Fragment>
  );
}
