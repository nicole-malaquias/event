import styled from "styled-components";

const Container_Drink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 300px;
  border-top: 2px solid #1b263b;
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
  button {
    margin: 15px 0px;
    width: 70%;
    height: 25px;
    background: none;
    border: 1px solid #1b263b;
    font-weight: bolder;
  }
  input {
    text-align: center;
    width: 70%;
    height: 25px;
  }
  select {
    background: none;
    border: none;
    height: 30px;
    width: 70%;
    border-bottom: 1px solid black;
  }

  button:active {
    background: #1b263b;
    color: white;
  }
`;
export default Container_Drink;
