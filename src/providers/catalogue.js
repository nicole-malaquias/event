import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((r) => setCatalogue(r.data));
  }, []);

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
