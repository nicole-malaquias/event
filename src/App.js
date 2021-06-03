import "./App.css";
import { Route } from "react-router";

import Router from "./routes";
import { CatalogueProvider, CatalogueContext } from "./providers/catalogue";
import {
  ConfraternizacaoProvider,
  ConfraternizacaoContext,
} from "./providers/confraternizacao";
import { GraduationProvider, GraduationContext } from "./providers/graduation";
import { WeddingProvider, WeddingContext } from "./providers/wedding";

function App() {
  return (
    <>
      <CatalogueProvider>
        <ConfraternizacaoProvider>
          <GraduationProvider>
            <WeddingProvider>
              <Router />
            </WeddingProvider>
          </GraduationProvider>
        </ConfraternizacaoProvider>
      </CatalogueProvider>
    </>
  );
}

export default App;
