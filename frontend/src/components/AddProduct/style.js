import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px -1px 5px 1px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
  h3 {
    margin: 10px 0 20px;
  }
`;
