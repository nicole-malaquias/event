import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    h1 {
        color: pink;
    }

`;

export default GlobalStyle;
