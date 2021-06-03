import React, { useState, createContext } from "react";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const [stock, setStock] = useState([]);

  const handleStockCAdd = (drink) => {
    const id = stock.length !== 0 ? stock[stock.length - 1].id + 1 : 1;
    drink.id = id;
    setStock([...stock, drink]);
  };
  const handleStockCSub = (id) => {
    const list = stock.filter((item) => item.id !== id);
    setStock(list);
  };

  return (
    <ConfraternizacaoContext.Provider
      value={{ stock, handleStockCAdd, handleStockCSub }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
