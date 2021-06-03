import styled from "styled-components";

const Container_Menu = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 80px;
  background: #0d1b2a;
  .item-menu {
    text-align: center;
    flex: 0 1 n;
    font-size: 12px;
    margin: 5px;
    padding: 2px;
  }

  h3 {
    color: #e0e1dd;
  }
`;
export default Container_Menu;
