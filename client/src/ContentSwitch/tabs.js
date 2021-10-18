import React from "react";
import {Tabs, Tab} from "carbon-components-react";
import Datatypes from "../Datatypes/Datatypes";
const Tabular =()=>{
    return(
      <div style={{backgroundColor:"white"}}>
      <article>
        
<div style={{ width: '125%' ,paddingLeft:"2%"}}>
  <Tabs scrollIntoView={false}>
    <Tab
      href="#"
      id="tab-1"
      label="Datatypes"
    >
      <div className="some-content">
      <Datatypes/>
      </div>
    </Tab>
    <Tab
      href="#"
      id="tab-2"
      label="Patterns/Rules"
    >
      <div className="some-content">
        Content for second tab goes here.
      </div>
    </Tab>
    <Tab
      href="#"
      id="tab-3"
      label='Column Associations'
    >
      <div className="some-content">
        Content for third tab goes here.
      </div>
    </Tab>
    <Tab
      href="#"
      id="tab-4"
      label='Functional Dependencies'
    >
      <div className="some-content">
        Content for fourth tab goes here.
      </div>
    </Tab>
    <Tab
      href="#"
      id="tab-5"
      label='Referential Integrity'
    >
      <div className="some-content">
        Content for fifth tab goes here.
      </div>
    </Tab>
  </Tabs>

</div>
</article>
</div>
    )
}
export default Tabular;
