import React from "react";
import ReactDOM from "react-dom";
import { Route,Switch, Link, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'  
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Jobs from "./Landing/jobs";
import reduxThunk from "redux-thunk";
import "../node_modules/carbon-components/css/carbon-components.css";
import reducers from "./reducers";
import Recommendation from "./Report/Db_recommend";
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const Datamod = () => {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Switch>
        <Route exact path="/Jobs" component={Jobs}/>
        <Route exact path="/" component={Jobs}/>
        {/* for metadata report will use this link */}
        <Route exact path="/report" component={Recommendation}/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
};

ReactDOM.render(<BrowserRouter><Datamod /></BrowserRouter>, document.getElementById("root"));