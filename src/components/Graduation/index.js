import Menu from "../Menu";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useContext } from "react";

import Container_Graduation from "./style";
import { GraduationContext } from "../../providers/graduation";
import Drink from "../Drink";

const Graduation = () => {
  const { stock } = useContext(GraduationContext);
  const resolution = window.innerWidth;

  return (
    <>
      <Menu />
      <Container_Graduation>
        <h1>Drinks Graduation</h1>
        {resolution <= 769 ? (
          <Slider>
            {stock.map((item, index) => (
              <div key={index}>
                <Drink item={item} typeParty={"GRADUATION"} />
              </div>
            ))}
          </Slider>
        ) : (
          stock.map((item, index) => (
            <Drink item={item} typeParty={"GRADUATION"} />
          ))
        )}
      </Container_Graduation>
    </>
  );
};

export default Graduation;
