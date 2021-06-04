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
    if (type === "graduation" || typeParty === "graduation") {
      if (func === "ADD") {
        handleStockGAdd(item);
      } else {
        handleStockGSub(item.id);
      }
    }
    if (type === "wedding" || typeParty === "wedding") {
      if (func === "ADD") {
        handleStockWAdd(item);
      } else {
        handleStockWSub(item.id);
      }
    }
    if (type === "Happy" || typeParty === "Happy") {
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
      {btn === "ADD" && (
        <input
          placeholder="Tipo do Evento"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
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
