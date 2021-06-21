import "./App.css";
import { Fragment } from "react";
import { ListOfContinent } from "./components/ListOfContinent";
import { ListOfCountry } from "./components/ListOfCountry";

function App() {
  return (
    <Fragment>
      {/* <ListOfContinent />
       */}
      <ListOfCountry />
    </Fragment>
  );
}
export default App;
