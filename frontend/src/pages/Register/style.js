import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 20px;
  min-width: 300px;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 7px;
    h2 {
      color: #616e8f;
      padding: 30px;
    }
  }
  p {
    margin: 100px 0 20px;
    color: #757575;
  }
`;
