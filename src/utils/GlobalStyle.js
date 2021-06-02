import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { primary } from "./colors";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html{
        font-size: 16px;
        box-sizing: border-box;

    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        margin: 0;
        font-family: ${primaryFont};
        color: ${primary[100]};
        background: rgb(43,6,56) fixed;
        background: linear-gradient(180deg, rgba(43,6,56,1) 0%, rgba(1,205,254,1) 100%) fixed;
    }

`;
