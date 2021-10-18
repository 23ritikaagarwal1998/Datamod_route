import * as axios from "axios";
import * as URL_MAPPING from "./URL_Mapping";
//this import statement is used for getting all the action types here
import * as ACTION_TYPES from "./actionTypes";

//used to get the jobs
export const getJobs = () => {
  let config = "";
  config = {
    headers: {},
  };
  let url = URL_MAPPING.GET_JOBS;
  console.log("url for get jobs is ", url);
  return function (dispatch) {
    axios
      .get(url, config)
      // used to connect to react API
      .then((res) =>
        dispatch({
          type: ACTION_TYPES.GET_JOBS,
          payload: res,
        })
      )
      .catch((err) =>
        dispatch({
          type: ACTION_TYPES.ERROR_GET_JOBS,
          payload: err,
        })
      );
  };
};

// export const getReportsPage = () => {
//   let config = "";
//   config = {
//     headers: {},
//   };
//   let url = URL_MAPPING.REPORTS_PAGE;
//   console.log("url for get report page is ", url);
//   return function (dispatch) {
//     axios
//       .get(url, config)
//       // used to connect to react API
//       .then((res) =>
//         dispatch({
//           type: ACTION_TYPES.REPORTS_PAGE,
//           payload: res,
//         })
//       )
//       .catch((err) =>
//         dispatch({
//           type: ACTION_TYPES.ERROR_REPORTS_PAGE,
//           payload: err,
//         })
//       );
//   };
// };

//to get the metadata 
export const getMetadata = () => {
  let config = "";
  config = {
    headers: {},
  };
  let url = URL_MAPPING.GET_METADATA;
  console.log("url for get metadata is ", url);
  return function (dispatch) {
    axios
      .get(url, config)
      // used to connect to react API
      .then((res) =>
        dispatch({
          type: ACTION_TYPES.GET_METADATA,
          payload: res,
        })
      )
      .catch((err) =>
        dispatch({
          type: ACTION_TYPES.ERROR_GET_METADATA,
          payload: err,
        })
      );
  };
};

//post api for adding new USERINPUT
export const addUserInputs = (data) => {
  //console.log("the fetched data is ",data);
  let config = "";
  config = {
    headers: {},
    body: JSON.stringify(data)
  };
  let url = URL_MAPPING.POST_USERINPUT;
  console.log("url for post userinput jobs is ", url);
  return function (dispatch) {
    axios.post(url, data, config)
      // used to connect to react API
      .then((res) =>
        dispatch({
          type: ACTION_TYPES.POST_UNSERINPUT,
          payload: res,
        })
      )
      .catch((err) =>
        dispatch({
          type: ACTION_TYPES.ERROR_POST_UNSERINPUT,
          payload: err,
        })
      );
  };
};