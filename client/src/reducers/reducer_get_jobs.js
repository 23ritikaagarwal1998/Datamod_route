import { GET_JOBS, ERROR_GET_JOBS } from "../actions/actionTypes";

export default function (state, action) {
  if (typeof state === "undefined") {
    return 0;
  }
  switch (action.type) {
    case GET_JOBS:
      return action.payload.data || false;
    case ERROR_GET_JOBS:
      return action.payload;
    default:
      return state;
  }
}
