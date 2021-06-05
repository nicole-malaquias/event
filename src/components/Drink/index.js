import Container_Drink from "./style";
import React, { useState } from "react";
import { useContext } from "react";
import { ConfraternizacaoContext } from "../../providers/confraternizacao";
import { GraduationContext } from "../../providers/graduation";
import { WeddingContext } from "../../providers/wedding";

const Drink = ({ item, btn, typeParty }) => {
  const [type, setType] = useState("");
  const { name, tagline, image_url } = item;
  const { handleStockCAdd, handleStockCSub } = useContext(
    ConfraternizacaoContext
  );
  const { handleStockGAdd, handleStockGSub } = useContext(GraduationContext);
  const { handleStockWAdd, handleStockWSub } = useContext(WeddingContext);

  const handleSubtmit = (func) => {
    if (type === "GRADUATION" || typeParty === "GRADUATION") {
      if (func === "ADD") {
        handleStockGAdd(item);
      } else {
        handleStockGSub(item.id);
      }
    }
    if (type === "WEDDING" || typeParty === "WEDDING") {
      console.log("entrou?");
      if (func === "ADD") {
        handleStockWAdd(item);
      } else {
        console.log("tentou remover");
        handleStockWSub(item.id);
      }
    }
    if (type === "HAPPY" || typeParty === "HAPPY") {
      if (func === "ADD") {
        handleStockCAdd(item);
      } else {
        handleStockCSub(item.id);
      }
    }
    setType("");
  };
  const handleSelect = () => {
    var select = document.getElementById(item.id);
    var value = select.options[select.selectedIndex].value;
    setType(value);
  };
  return (
    <Container_Drink>
      <h4>{name}</h4>
      <br></br>
      <span>{tagline}</span>
      <img src={image_url} />
      {btn === "ADD" && (
        <>
          <label for="party">Choose a Party:</label>
          <select id={item.id} onChange={handleSelect}>
            <option value="types">Types</option>
            <option value="GRADUATION">GRADUATION</option>
            <option value="WEDDING">WEDDING</option>
            <option value="HAPPY">HAPPY</option>
          </select>
        </>
      )}

      {btn === "ADD" ? (
        <button onClick={() => handleSubtmit("ADD")}> ADD</button>
      ) : (
        <button onClick={() => handleSubtmit("REM")}> Remove</button>
      )}
    </Container_Drink>
  );
};

export default Drink;
