import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Play', sans-serif;

    }

    a, button, svg{
        cursor: pointer;
        transition: all 0.1s ease;
    }

    a:hover, button:hover, svg:hover{
        opactiy: 0.8;
        scale(1.05);

    }

    body[data-theme="dark"] {
        --body: #111;
        --color: #fff;
        --color1:#fff;
        background-color: var(--body);
        color: var(--color);
        --box-shadow: -1px 0px 30px 0px rgba(255,255,255,0.55);
        box-shadow: var(--box-shadow);
        --textbox-shadow: -1px 0px 30px 0px rgba(255,255,255,0.15);
      }
      
      body[data-theme="light"] {
        --body: #fafafa;
        --body1: #39c395;
        --color: #111;
        --color1: #fff;
        background-color: var(--body);
        color: var(--color);
        --box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.55);
        box-shadow: var(--box-shadow);
        --textbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);

      }

      

`;
