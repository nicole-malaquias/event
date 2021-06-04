import Container_Menu from "./style";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <Container_Menu>
      <div className="item-menu" onClick={() => sendTo("/")}>
        <h3>Home</h3>
      </div>
      <div className="item-menu" onClick={() => sendTo("/Confraternization")}>
        <h3>Happy Hour</h3>
      </div>
      <div className="item-menu" onClick={() => sendTo("/Graduation")}>
        <h3>Graduation</h3>
      </div>
      <div className="item-menu" onClick={() => sendTo("/Wedding")}>
        <h3>Wedding</h3>
      </div>
    </Container_Menu>
  );
};

export default Menu;
