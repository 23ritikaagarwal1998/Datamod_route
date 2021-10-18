import { POST_UNSERINPUT, ERROR_POST_UNSERINPUT } from "../actions/actionTypes";

export default function (state, action) {
  if (typeof state === "undefined") {
    return 0;
  }
  switch (action.type) {
    case POST_UNSERINPUT:
      return action.payload.data || false;
    case ERROR_POST_UNSERINPUT:
      return action.payload;
    default:
      return state;
  }
}
