import { combineReducers } from "redux";
//import { reducer as formReducer } from 'redux-form';

import GetJobs from "./reducer_get_jobs";
import GetMetadata from "./reducer_get_metadata";
import AddUserInputs from "./reducer_add_userinputs";

const rootReducer = combineReducers({
  //form: formReducer,
  GetJobs: GetJobs,
  GetMetadata: GetMetadata,
  AddUserInputs: AddUserInputs,
});

export default rootReducer;
