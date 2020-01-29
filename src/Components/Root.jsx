import React, { Component } from "react";
import { Row, Column } from "simple-flexbox";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ObjectProperties from "./ObjectProperties";

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          {/*<AppBar position="static">
            <Toolbar>
             
            </Toolbar>
            </AppBar>*/}
        </Row>
        <Row style={{ height: "inherit", backgroundColor: "#5c5c5c" }}>
          <Column
            flex={1}
            style={{
              backgroundColor: "grey",
              boxShadow: "rgb(74, 74, 74) 5px 1px 14px",
              zIndex: 1
            }}
          >
            
          </Column>
          <Column
            flex={3}
            style={{ backgroundColor: "white",margin:16,  zIndex: 0, paddingTop: 32 }}
          >
        
            <div id="root-component-container">
            
            </div>
          </Column>
          <Column
            flex={1}
            style={{
              backgroundColor: "grey",
              boxShadow: "-3px 1px 14px #4a4a4a",
              zIndex: 1
            }}
          >
            <ObjectProperties information={{type:"BUTTON"}}/>
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}

export default Root;
