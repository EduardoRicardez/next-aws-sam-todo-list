import "@fontsource/poppins";
import { createGlobalStyle } from "styled-components";

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    * { box-sizing:border-box }

    body {
      padding:0;
      margin:0;
    }

    button,span,textarea{
      font-size:14px;
      font-family:"Poppins";
    }

    button{
      outline:0;
      border:0;
      background:none;
      cursor:pointer;
      &:hover{
        background-color:rgba(0,0,0,0.1);
      }
    }
`;

export default CustomApp;
