import React, { Component } from "react";
import "./Jobsrender.css";
import { addUserInputs } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Username extends Component {
  //gets called once
  constructor(props) {
    super(props);
    this.state = {
      userInput: [],
    };
  }

  //1st this gets executed
  //is invoked immediately after a component is mounted
  componentDidMount() {
    // let data ={"project_name":"test_project2","target_engine":"target_engine","db_details":{"db_engine_name":"dbengine","db_host_name":"127.0.0.1","db_port":"100","db_service_name":"dbservice","db_database_name":"database name","db_schema":"dbschema","db_username":"dbuser","db_password":"xxxx","db_use_ssl":true}}
    this.props.addUserInputs(data);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("This.props", this.props.AddUserInputs);
    console.log("NextProps", nextProps.AddUserInputs);
    //the id which we took in state
    if (this.props.AddUserInputs !== nextProps.AddUserInputs) {
      this.setState({ userInput: nextProps.AddUserInputs });
    }
  }

  //is invoked immediately before a component is unmounted and destroyed.
  //You should not call setState() in componentWillUnmount() because the component will never be re-rendered.
  componentWillUnmount() {}

  UNSAFE_componentWillMount() {}

  render() {
    console.log("the fetched jobsrender is ", this.state.userInput);
    return <div>hello input new user</div>;
  }
}
function mapStateToProps(state) {
  return {
    AddUserInputs: state.AddUserInputs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addUserInputs,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Username);
