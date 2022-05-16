import React, { useCallback, useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";
import { FiAlertCircle } from "react-icons/fi";
import { Container } from "./style";
import Tooltip from "../Tooltip";

export default function Input({ name, Icon, ...rest }) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error} isFocused={isFocused}>
      <Icon size={17} />
      <input
        name={name}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

      {error && (
        <Tooltip error={error}>
          <FiAlertCircle color="#fc5454" />
        </Tooltip>
      )}
    </Container>
  );
}
