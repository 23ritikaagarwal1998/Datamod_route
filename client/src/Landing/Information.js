import React, { useState } from "react";
import {
  TextInput,
  Button,
  Dropdown,
  Checkbox,
  Grid,
} from "carbon-components-react";
import "./Information.css";
import { CategoryNew32 } from "@carbon/icons-react";
import Jobsrender from "./Jobsrender";
import Username_input from "./Username_input";
const Information = (props) => {
  const [enteredJobs, setEnteredJobs] = useState("");
  const [enteredSourceEngine, setEnteredSourceEngine] = useState("Oracle");
  const [enteredHost, setEnteredHost] = useState("");
  const [enteredPort, setEnteredPort] = useState("");
  const [enteredService, setEnteredService] = useState("");
  const [enteredDbschema, setEnteredDbSchema] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredTargetEngine, setEnteredTargetEngine] = useState("PostgreSQL");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredJobs.trim().length === 0 ||
      enteredSourceEngine.length === 0 ||
      enteredHost.trim().length === 0 ||
      enteredPort.trim().length === 0 ||
      enteredService.trim().length === 0 ||
      enteredDbschema.trim().length === 0 ||
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
      enteredTargetEngine.length === 0
    ) {
      return;
    }
    console.log(
      enteredJobs,
      enteredSourceEngine,
      enteredHost,
      enteredPort,
      enteredService,
      enteredDbschema,
      enteredUsername,
      enteredPassword,
      enteredTargetEngine
    );
    setEnteredJobs("");
    setEnteredSourceEngine("Oracle");
    setEnteredHost("");
    setEnteredPort("");
    setEnteredService("");
    setEnteredDbSchema("");
    setEnteredUsername("");
    setEnteredPassword("");
    setEnteredTargetEngine("PostgreSQL");
  };

  const enteredJobsHandler = (event) => {
    setEnteredJobs(event.target.value);
  };

  const enteredHostHandler = (event) => {
    setEnteredHost(event.target.value);
  };

  const filterSourceChangeHandler = (selectedsource) => {
    setEnteredSourceEngine(selectedsource.selectedItem.label);
  };

  const enteredPortHandler = (event) => {
    setEnteredPort(event.target.value);
  };

  const enteredServiceHandler = (event) => {
    setEnteredService(event.target.value);
  };
  const enteredDbSchemaHandler = (event) => {
    setEnteredDbSchema(event.target.value);
  };

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const filterTargetChangeHandler = (selectedtarget) => {
    setEnteredTargetEngine(selectedtarget.selectedItem.label);
  };

  const Source = [
    {
      id: "Oracle",
      label: "Oracle",
    },
    {
      id: "option-2",
      label: "Db2",
    },
  ];

  const target = [
    {
      id: "PostgreSQL",
      label: "PostgreSQL",
    },
    {
      id: "Db2",
      label: "Db2",
    },
  ];
  return (
    <form onSubmit={addUserHandler}>
      <table style={{ alignContent: "center", width: "1175px" }}>
        <Grid>
          <tbody>
            <tr>
              <td style={{ paddingLeft: "10%", width: "50%" }}>
                <h5 style={{ textAlign: "left", verticalAlign: "middle" }}>
                  <CategoryNew32 /> Enter New Job
                </h5>
                <hr style={{ paddingLeft: "9%" }} />
                <br />
                <p>
                  Enter <strong>ALL</strong> parameters below to initiate a new
                  schema recommendation analysis:
                </p>
                <br />
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "50%" }}>
                        {/* <label htmlFor="jobs" className="bx--label"></label> */}
                        <div className="required-field textinputfield">
                          <TextInput
                            id="jobs"
                            invalidText="Invalid error message."
                            labelText="Job name or title:"
                            placeholder="Enter Jobname"
                            required
                            type="text"
                            value={enteredJobs}
                            onChange={enteredJobsHandler}
                          />
                        </div>
                      </td>
                      <td style={{ width: "50%" }}>
                        <div className="textinputfield">
                          <Dropdown
                            onChange={filterSourceChangeHandler}
                            ariaLabel="Dropdown"
                            id="source-db-menu"
                            items={Source}
                            label="Oracle"
                            titleText="Select Source Engine:"
                            value={Source.label}
                          />
                          <fieldset
                            className="bx--fieldset"
                            style={{ marginBottom: "2rem" }}
                          >
                            <legend className="bx--label"></legend>
                            <Checkbox
                              defaultChecked
                              labelText="Use SSL"
                              id="checked"
                            />
                          </fieldset>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <div className="required-field textinputfield">
                          <TextInput
                            id="hostname"
                            invalidText="Invalid error message."
                            labelText="Host:*"
                            required
                            placeholder="Enter Hostname"
                            type="text"
                            value={enteredHost}
                            onChange={enteredHostHandler}
                          />
                        </div>
                      </td>
                      <td style={{ width: "50%" }}>
                        <div className="required-field textinputfield">
                          <TextInput
                            id="port"
                            invalidText="Invalid error message."
                            labelText="Port:"
                            required
                            placeholder="Enter Port"
                            type="number"
                            min="0"
                            value={enteredPort}
                            onChange={enteredPortHandler}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <div className="required-field textinputfield">
                          <TextInput
                            id="servicename"
                            invalidText="Invalid error message."
                            labelText="Database/Service Name:"
                            required
                            placeholder="Enter Database/Service Name"
                            type="text"
                            value={enteredService}
                            onChange={enteredServiceHandler}
                          />
                        </div>
                      </td>
                      <td style={{ width: "50%" }}>
                        <div className="required-field textinputfield">
                          <TextInput
                            id="dbschema"
                            invalidText="Invalid error message."
                            labelText="Database Schema:"
                            required
                            placeholder="Enter Source Schema"
                            type="text"
                            value={enteredDbschema}
                            onChange={enteredDbSchemaHandler}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <div className="required-field textinputfield">
                          <TextInput
                            id="username"
                            invalidText="Invalid error message."
                            labelText="Username:"
                            required
                            placeholder="Enter Username"
                            type="text"
                            value={enteredUsername}
                            onChange={enteredUsernameHandler}
                          />
                        </div>
                      </td>
                      <td style={{ width: "50%" }}>
                        <div className="required-field textinputfield">
                          <TextInput.PasswordInput
                            id="Password"
                            required
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
                            labelText="Password:"
                            placeholder="Enter Password"
                            type="password"
                            value={enteredPassword}
                            onChange={enteredPasswordHandler}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "50%" }}>
                        <div className="textinputfield">
                          <Dropdown
                            onChange={filterTargetChangeHandler}
                            ariaLabel="Dropdown"
                            id="target-db-menu"
                            items={target}
                            label="PostgreSQL"
                            titleText="Select Target Engine:"
                          />
                        </div>
                      </td>
                    </tr>
                    <Button kind="primary" type="submit" style={{padding:"6%", paddingLeft:"7%"}}>
                      Submit Job
                    </Button>
                    {/* <Username_input/> */}
                  </tbody>
                </table>
              </td>
              <Jobsrender />
            </tr>
          </tbody>
        </Grid>
      </table>
    </form>
  );
};
export default Information;
