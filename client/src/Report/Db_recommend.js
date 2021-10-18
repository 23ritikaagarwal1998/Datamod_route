import React, { Component } from "react";
import "./Db_recommend.css";
import { Button } from "carbon-components-react";
import { Download32 } from "@carbon/icons-react";
import Metadata from "./Metadata";
import Tabular from "../ContentSwitch/tabs";
class Recommendation extends Component {
  render() {
    return (
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <h3 className="titlecolor">
                  <strong>Database Schema Recommendations</strong>
                  <hr style={{ width: "260%" }} />
                </h3>
              </td>
              <td className="buttonstyle">
                <Button>
                  Download All SQL
                  <Download32 style={{ padding: "5%" }} />
                  {/* <strong>Download All SQL</strong>&nbsp;&nbsp;
                  <Download32 style={{ padding: "5%" }} /> */}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rowC">
          <Metadata />
          <Tabular />
        </div>
      </form>
    );
  }
}
export default Recommendation;
