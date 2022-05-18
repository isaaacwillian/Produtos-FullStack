import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

export default function Select({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return <select ref={selectRef} {...rest} />;
}
