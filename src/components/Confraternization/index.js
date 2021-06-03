import Menu from "../Menu";
import Drink from "../Drink";
import Container_Confra from "./style";
import React, { useState } from "react";
import { useContext } from "react";
import { ConfraternizacaoContext } from "../../providers/confraternizacao";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Confraternization = () => {
  const { stock } = useContext(ConfraternizacaoContext);
  const resolution = window.innerWidth;

  return (
    <>
      <Menu />
      <Container_Confra>
        <h1>Drinks Happy Hour</h1>
        {resolution <= 769 ? (
          <Slider>
            {stock.map((item, index) => (
              <div key={index}>
                <Drink item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          stock.map((item, index) => <Drink item={item} />)
        )}
      </Container_Confra>
    </>
  );
};

export default Confraternization;
