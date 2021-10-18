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
import "./Datatypes.css";

class Datatypes extends Component {
  render() {
    const headerData = [
      {
        header: "Column Name",
        key: "name",
      },
      {
        header: "Source Datatype",
        key: "protocol",
      },
      {
        header: "Target Datatype",
        key: "port",
      },
      {
        header: "Proposed Datatype	",
        key: "rule",
      },
      {
        header: "Recommendation",
        key: "attached_groups",
      },
    ];

    const rowData = [
      {
        attached_groups: "Kevins VM Groups",
        id: "a",
        name: "Load Balancer 3",
        port: 3000,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Disabled",
      },
      {
        attached_groups: "Maureens VM Groups",
        id: "b",
        name: "Load Balancer 1",
        port: 443,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Starting",
      },
      {
        attached_groups: "Andrews VM Groups",
        id: "c",
        name: "Load Balancer 2",
        port: 80,
        protocol: "HTTP",
        rule: "DNS delegation",
        status: "Active",
      },
      {
        attached_groups: "Marcs VM Groups",
        id: "d",
        name: "Load Balancer 6",
        port: 3000,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Disabled",
      },
      {
        attached_groups: "Mels VM Groups",
        id: "e",
        name: "Load Balancer 4",
        port: 443,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Starting",
      },
      {
        attached_groups: "Ronjas VM Groups",
        id: "f",
        name: "Load Balancer 5",
        port: 80,
        protocol: "HTTP",
        rule: "DNS delegation",
        status: "Active",
      },
    ];
    return (
      <section>
        <DataTable rows={rowData} headers={headerData}>
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer
              style={{ color: "#325C80" }}
              title="Table: customer"
            >
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
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
      </section>
    );
  }
}
export default Datatypes;
