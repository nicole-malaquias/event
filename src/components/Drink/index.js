import Container_Drink from "./style";
import React, { useState } from "react";
import { useContext } from "react";
import { ConfraternizacaoContext } from "../../providers/confraternizacao";
import { GraduationContext } from "../../providers/graduation";
import { WeddingContext } from "../../providers/wedding";

const Drink = ({ item, btn }) => {
  const [type, setType] = useState("");
  const { name, tagline, image_url } = item;
  const { handleStockCAdd, handleStockCSub } = useContext(
    ConfraternizacaoContext
  );
  const { handleStockGAdd, handleStockGSub } = useContext(GraduationContext);
  const { handleStockWAdd, handleStockWSub } = useContext(WeddingContext);

  const handleSubtmit = (func) => {
    if (type === "graduation") {
      if (func === "ADD") {
        handleStockGAdd(item);
        console.log("chegou add");
      } else {
        handleStockGSub(item.id);
      }
    }
    if (type === "wedding") {
      if (func === "ADD") {
        handleStockWAdd(item);
      } else {
        handleStockWSub(item.id);
      }
    }
    if (type === "Happy") {
      if (func === "ADD") {
        handleStockCAdd(item);
      } else {
        handleStockCSub(item.id);
      }
    }
    setType("");
  };

  return (
    <Container_Drink>
      <h4>{name}</h4>
      <br></br>
      <span>{tagline}</span>
      <img src={image_url} />
      <input
        placeholder="Tipo do Evento"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      {btn === "ADD" ? (
        <button onClick={() => handleSubtmit("ADD")}> ADD</button>
      ) : (
        <button onClick={() => handleSubtmit("REM")}> Remove</button>
      )}
    </Container_Drink>
  );
};

export default Drink;
