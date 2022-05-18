export function turnAuthTrueRequest() {
  return {
    type: "TURN_AUTH_TRUE_REQUEST",
  };
}

export function turnAuthTrueSuccess() {
  return {
    type: "TURN_AUTH_TRUE_SUCCESS",
  };
}

export function turnAuthTrueFailure() {
  return {
    type: "TURN_AUTH_TRUE_FAILURE",
  };
}
