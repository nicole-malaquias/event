import React, { useState, createContext } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [stock, setStock] = useState([]);

  const handleStockGAdd = (drink) => {
    const id = stock.length !== 0 ? stock[stock.length - 1].id + 1 : 1;
    drink.id = id;
    setStock([...stock, drink]);
    console.log(stock);
  };
  const handleStockGSub = (id) => {
    const list = stock.filter((item) => item.id !== id);
    setStock(list);
  };

  return (
    <GraduationContext.Provider
      value={{ stock, handleStockGAdd, handleStockGSub }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
