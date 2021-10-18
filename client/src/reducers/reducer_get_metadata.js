import { GET_METADATA, ERROR_GET_METADATA } from "../actions/actionTypes";

export default function (state, action) {
  if (typeof state === "undefined") {
    return 0;
  }
  switch (action.type) {
    case GET_METADATA:
      return action.payload.data || false;
    case ERROR_GET_METADATA:
      return action.payload;
    default:
      return state;
  }
}
