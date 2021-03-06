import React, { useState, createContext } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [stock, setStock] = useState([]);

  const handleStockWAdd = (drink) => {
    const id = stock.length !== 0 ? stock[stock.length - 1].id + 1 : 1;
    drink.id = id;
    setStock([...stock, drink]);
  };
  const handleStockWSub = (id) => {
    const list = stock.filter((item) => item.id !== id);
    setStock(list);
  };

  return (
    <WeddingContext.Provider
      value={{ stock, handleStockWAdd, handleStockWSub }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
