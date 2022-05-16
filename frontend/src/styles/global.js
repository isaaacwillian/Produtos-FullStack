import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

  }
  body {
    background: linear-gradient(90deg, rgba(79,0,175,1) 25%, rgba(29,5,129,1) 50%);
    color: white;
    -webkit-font-smoothing: antialiased;
    transition: all 0.5s;
  }
  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
  }
  button{
    cursor: pointer;
  }
`;
