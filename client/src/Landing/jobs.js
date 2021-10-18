import React from "react";
import "./Jobs.css";
import Information from "./Information";

const Jobs = () => {
  return (
    <div>
      <form>
        <h2
          style={{
            color: "#0072c3",
            paddingTop: "20px",
            paddingLeft: "85px",
            height: "80px",
          }}
        >
          <strong>Database Schema Builder</strong>
        </h2>
      </form>
      <Information />
    </div>
  );
};
export default Jobs;
