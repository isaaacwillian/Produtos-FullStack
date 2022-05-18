import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromBottom = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  border-radius: 0 0 15px 15px;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  background-color: white;
  animation: ${appearFromBottom} 1s;
  div {
    margin: 0 10px;
    display: flex;
    justify-content: center;
    p {
      width: 130px;
      text-align: center;
    }
  }
  form {
    div {
      display: flex;
      justify-content: center;
      gap: 1px;
      input,
      select {
        width: 130px;
      }
    }
    button {
      display: flex;
      justify-content: center;
      color: white;
    }
  }
  h3 {
    margin: 10px 0 20px;
  }
  #close {
    position: absolute;
    right: 0;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
