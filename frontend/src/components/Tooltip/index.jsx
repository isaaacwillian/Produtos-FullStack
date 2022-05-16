import React from "react";
import { Container } from "./style";

export default function Tooltip({ children, error }) {
  return (
    <Container>
      <span>{error}</span>
      {children}
    </Container>
  );
}
