import styled from "styled-components";

const Container_Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  div + div {
    margin: 0 auto;
  }
  div {
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    width: 100%;
    flex: 2 1 auto;
  }
`;
export default Container_Home;
