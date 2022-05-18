import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  background-color: #e5e5e5;
  border-radius: 20px;
  min-width: 300px;
  color: black;
  display: flex;
  flex-direction: column;
  table {
    padding: 20px 40px;

    th,
    td {
      text-align: center;
      border: 1px solid black;
      padding: 0 2px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 5px 0;
  box-shadow: 0 6px 10px -2px gray;

  button {
    width: 70px;
    color: black;
    position: absolute;
    right: 10px;
    top: -8px;
  }
  h2 {
    text-align: center;
  }
`;
