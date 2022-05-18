import styled from "styled-components";

export const Table = styled.table`
  th {
    button {
      &:hover {
        background-color: #fcad00;
      }
    }
  }
  td {
    button {
      display: flex;
      padding: 1px;
      background-color: transparent;
      border: none;
      color: black;
      transition: all 0.5s;
      &:hover {
        color: #fcad00;
      }
      &:active {
        transform: translateY(2px);
        color: #fcad79;
      }
    }
  }
`;
