import Menu from "../Menu";
import Drink from "../Drink";
import Container_Home from "./style";

import React, { useState } from "react";
import { useContext } from "react";
import { ConfraternizacaoContext } from "../../providers/confraternizacao";
import { CatalogueContext } from "../../providers/catalogue";
import { GraduationContext } from "../../providers/graduation";
import { WeddingContext } from "../../providers/wedding";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Home = () => {
  const { catalogue } = useContext(CatalogueContext);
  const { handleStockCAdd, handleStockCSub } = useContext(
    ConfraternizacaoContext
  );
  const { handleStockGAdd, handleGtockCSub } = useContext(GraduationContext);
  const { handleStockWAdd, handleGtockWSub } = useContext(WeddingContext);
  const resolution = window.innerWidth;
  const [btn, setBtn] = useState("ADD");

  return (
    <>
      <Menu />
      <Container_Home>
        <h1>Bebidas</h1>
        {resolution <= 769 ? (
          <Slider>
            {catalogue.map((item, index) => (
              <div key={index}>
                <Drink item={item} btn={btn} />
              </div>
            ))}
          </Slider>
        ) : (
          catalogue.map((item, index) => <Drink item={item} btn={btn} />)
        )}
      </Container_Home>
    </>
  );
};

export default Home;
