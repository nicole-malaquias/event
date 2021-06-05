import Menu from "../Menu";
import Drink from "../Drink";
import Container_Wedding from "./style";
import React, { useState } from "react";
import { useContext } from "react";
import { WeddingContext } from "../../providers/wedding";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Wedding = () => {
  const { stock } = useContext(WeddingContext);
  const resolution = window.innerWidth;

  return (
    <>
      <Menu />
      <Container_Wedding>
        <h1>Drinks Wedding</h1>
        {resolution <= 769 ? (
          <Slider>
            {stock.map((item, index) => (
              <div key={index}>
                <Drink item={item} typeParty={"WEDDING"} />
              </div>
            ))}
          </Slider>
        ) : (
          stock.map((item, index) => (
            <Drink item={item} typeParty={"WEDDING"} />
          ))
        )}
      </Container_Wedding>
    </>
  );
};

export default Wedding;
