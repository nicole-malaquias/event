import "./App.css";

import { Route } from "react-router";
import Router from "./routes";
import { CatalogueProvider, CatalogueContext } from "./providers/catalogue";

function App() {
  return (
    <>
      <CatalogueProvider>
        <Router />
      </CatalogueProvider>
    </>
  );
}

export default App;
