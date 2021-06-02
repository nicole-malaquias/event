import styled from "styled-components";

const Container_Drink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 300px;
  img {
    width: 100px;
    height: 200px;
  }
  h4,
  span {
    text-align: center;
    width: 100%;
    flex: 2 1 auto;
  }
`;
export default Container_Drink;
