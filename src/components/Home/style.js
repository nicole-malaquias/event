import styled from "styled-components";

const Container_Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  div + div {
    margin: 10px;
  }
  h1 {
    text-align: center;
    width: 100%;
    flex: 2 1 auto;
  }
`;
export default Container_Home;
