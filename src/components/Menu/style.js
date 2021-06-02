import styled from "styled-components";

const Container_Menu = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 80px;
  border: 2px solid pink;

  .item-menu {
    text-align: center;
    flex: 0 1 n;
    border: 2px solid black;
    margin: 5px;
    padding: 2px;
  }
`;
export default Container_Menu;
