import React, { Component } from "react";
import {
  Table,
  DataTable,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
  TableCell,
} from "carbon-components-react";
import { TaskView32, CircleFillGlyph, Renew32 } from "@carbon/icons-react";
import "./Jobsrender.css";
import { Link } from "react-router-dom";
import { getJobs } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class Jobsrender extends Component {
  //gets called once
  constructor(props) {
    super(props);
    this.state = {
      detailedData: [],
      reload: false,
    };
    this.refreshPage = this.refreshPage.bind(this);
  }

  //1st this gets executed
  //is invoked immediately after a component is mounted
  componentDidMount() {
    this.props.getJobs();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("This.props", this.props.GetJobs);
    console.log("NextProps", nextProps.GetJobs);
    //the id which we took in state
    if (this.props.GetJobs !== nextProps.GetJobs) {
      this.setState({ detailedData: nextProps.GetJobs });
    }
  }

  //is invoked immediately before a component is unmounted and destroyed.
  //You should not call setState() in componentWillUnmount() because the component will never be re-rendered.
  componentWillUnmount() {}

  UNSAFE_componentWillMount() {}

  refreshPage() {
    this.props.getJobs();
  }

  render() {
    console.log("the fetched jobsrender is ", this.state.detailedData);

    const headerData = [
      {
        header: "Name",
        key: "project_name",
      },
      {
        header: "Status",
        key: "status",
      },
      {
        header: "Details",
        key: "details",
      },
      {
        header: "Action",
        key: "action",
      },
    ];
    let rowData = [];
    for (var i = 0; i < this.state.detailedData.length; i++) {
      rowData[i] = this.state.detailedData[i];
      rowData[i].id = this.state.detailedData[i].project_name;
      if (this.state.detailedData[i].status === "Done") {
        rowData[i].action = <Link to="/report">View </Link>;
        rowData[i].status = (
          <>
            <CircleFillGlyph className="my-custom-class" />
            {rowData[i].status}
          </>
        );
      } else {
        rowData[i].action = "";
        rowData[i].status = (
          <>
            <CircleFillGlyph
              aria-labelledby="Not Started"
              className="my-custom-class-opt"
            />
            {rowData[i].status}
          </>
        );
      }
    }
    console.log("the row data", rowData);
    return (
      <td style={{ paddingLeft: "9%", paddingBlock: "3%" }}>
        {/* <Information data={this.state.detailedData}/> */}
        <h5>
          <TaskView32 /> View Submitted Jobs
          <Renew32 className="refresh-color" onClick={this.refreshPage} />
        </h5>
        <hr />
        <br />
        <DataTable rows={rowData} headers={headerData}>
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader
                        {...getHeaderProps({ header, isSortable: true })}
                      >
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </td>
    );
  }
}
function mapStateToProps(state) {
  return {
    GetJobs: state.GetJobs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getJobs,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Jobsrender);
