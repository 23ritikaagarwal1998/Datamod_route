import React, { Component } from "react";
import { getMetadata } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./Db_recommend.css";
import "./Metadata.css";
class Metadata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metadataReport: [],
    };
  }
  componentDidMount() {
    this.props.getMetadata();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("This.props", this.props.GetMetadata);
    console.log("NextProps", nextProps.GetMetadata);
    //the id which we took in state
    if (this.props.GetMetadata !== nextProps.GetMetadata) {
      this.setState({ metadataReport: nextProps.GetMetadata });
    }
  }
  componentWillUnmount() {}
  UNSAFE_componentWillMount() {}
  render() {
    console.log(
      "the fetched Metadata Report page is ",
      this.state.metadataReport
    );
    let rowData = [];
    let fetchedData = [];

    for (var i = 0; i < this.state.metadataReport.length; i++) {
      rowData[i] = this.state.metadataReport[i];
      rowData[i].source_database =
        this.state.metadataReport[i].report.info.source_database;
      rowData[i].target_database =
        this.state.metadataReport[i].report.info.target_database;
      rowData[i].table_count =
        this.state.metadataReport[i].report.info.table_count;
      if (i == 0) {
        fetchedData[0] = rowData[i].id;
        fetchedData[1] = rowData[i].source_database;
        fetchedData[2] = rowData[i].target_database;
        fetchedData[3] = rowData[i].table_count;
      }
      rowData[i].id = this.state.metadataReport[i].report_id;
    }
    return (
      // <aside style={{ width: "20%" }}>
      <aside style={{ zIndex: "inherit" ,width:"20%"}}>
        <nav style={{ top: "200px" }}>
          <div
            style={{
              backgroundColor: "white",
              color: "#325C80",
              paddingLeft: "11px",
            }}
          >
            <section>
              <table className="tablestyle">
                <tbody>
                  <tr>
                    <td className="metadataColors">
                      <strong>Source DB</strong>
                    </td>
                    <td className="metadataColors">{fetchedData[1]}</td>
                  </tr>
                  <tr>
                    <th
                      className="metadataColors"
                      style={{ textAlign: "start" }}
                    >
                      <strong>Target DB</strong>
                    </th>
                    <td className="metadataColors">{fetchedData[2]}</td>
                  </tr>
                  <tr>
                    <th
                      className="metadataColors"
                      style={{ textAlign: "start" }}
                    >
                      <strong>Tables Analysed</strong>
                    </th>
                    <td className="metadataColors">{fetchedData[3]}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <br/>
            <br/>
            <section>
              <strong>List of Tables:</strong>
              <br/>
              <br/>
              <ul>
                <li> {">"} customer </li>
                <li> {">"} orders</li>
                <li> {">"} products</li>
              </ul>
            </section>
          </div>
        </nav>
      </aside>
    );
  }
}
function mapStateToProps(state) {
  return {
    GetMetadata: state.GetMetadata,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getMetadata,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Metadata);
