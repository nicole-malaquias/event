import React from "react";
import Menu from "../Menu";
import Drink from "../Drink";
import Container_Home from "./style";

import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Home = () => {
  const { catalogue } = useContext(CatalogueContext);
  const resolution = window.innerWidth;

  return (
    <>
      <Menu />
      <Container_Home>
        <h1>Bebidas</h1>
        {resolution <= 769 ? (
          <Slider>
            {catalogue.map((item, index) => (
              <div key={index}>
                <Drink item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          catalogue.map((item, index) => <Drink item={item} />)
        )}
      </Container_Home>
    </>
  );
};

export default Home;
