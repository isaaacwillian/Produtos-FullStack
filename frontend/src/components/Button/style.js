import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 20px;
  border: 0;
  margin-top: 3px;
  transition: 0.2s;
  background: linear-gradient(
    90deg,
    rgba(248, 84, 9, 1) 0%,
    rgba(245, 110, 8, 1) 49%,
    rgba(228, 236, 2, 1) 90%
  );
  color: white;
  border-width: 2px;
  border-style: solid;
  border-color: #e5e5e5;
  margin-top: 10px;
  &:hover {
    transform: translateY(-3px);
    border-color: linear-gradient(
      90deg,
      rgba(248, 84, 9, 1) 0%,
      rgba(245, 110, 8, 1) 49%,
      rgba(228, 236, 2, 1) 90%
    );
  }
  &:active {
    transform: translateY(-1px);
  }
`;
