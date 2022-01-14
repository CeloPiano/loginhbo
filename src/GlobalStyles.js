import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants/colors";


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{

        width: 100vw;
        height: 100vh;

        background-color: ${COLORS.white};

        font-family: 'Be Vietnam Pro', sans-serif;
    }

    input{
        outline: none;
    }


`