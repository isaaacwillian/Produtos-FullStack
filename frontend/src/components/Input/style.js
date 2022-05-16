import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  background-color: white;
  height: 35px;
  border: ${(props) => {
    if (props.isFocused) {
      return "2px solid #fcad00";
    }
    if (props.hasError) {
      return "2px solid #fc5454";
    }
    return null;
  }};

  border-radius: 8px;
  transition: all 0.5s;

  input {
    height: 100%;
    border: none;
    color: black;
    background-color: transparent;

    ::placeholder {
      color: #a8a7a7;
    }
  }

  svg {
    transition: all 0.5s;
    color: ${(props) => {
      if (props.isFocused) {
        return "#fcad00";
      }
      if (props.hasError) {
        return "#fc5454";
      }
      return "orange";
    }};
    width: 100%;
    margin: 7px;
  }
`;
