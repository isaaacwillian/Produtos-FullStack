export default function reducer(state = false, action) {
  switch (action.type) {
    case "TURN_AUTH_TRUE_SUCCESS":
      return true;
    case "TURN_AUTH_FALSE_FAILURE":
      return false;
    default:
      return state;
  }
}
