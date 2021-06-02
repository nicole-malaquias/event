import React from "react";
import Menu from "../Menu";
import Drink from "../Drink";
import Container_Home from "./style";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";

const Home = () => {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <>
      <Menu />
      <Container_Home>
        <h1>Registros</h1>
        {catalogue.map((item) => (
          <Drink item={item} />
        ))}
      </Container_Home>
    </>
  );
};

export default Home;
