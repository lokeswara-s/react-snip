import React, { Component } from "react";
import { Row, Column } from "simple-flexbox";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ObjectProperties from "./ObjectProperties";
import OptionList from "./OptionList";

class Root extends Component {


  onDrop=(ev)=>{
    ev.preventDefault();
    console.log(ev.dataTransfer.getData("text/html"));
    var data=ev.dataTransfer.getData("text/html");
    var nodeCopy = document.getElementById(this.state.currentSelected).cloneNode(true);
    nodeCopy.draggable = false
  
    nodeCopy.id = Math.random(); /* We cannot use the same ID */
    nodeCopy.addEventListener("dragover",(e)=>{
      e.target.style.border = "1px dashed black"
    })
    nodeCopy.addEventListener("dragleave",(e)=>{
      e.target.style.border = "1px solid black"
    })
    nodeCopy.addEventListener("drop",(e)=>{
      e.target.style.border = "unset"
    })
    ev.target.appendChild(nodeCopy);
  }

  onDragOver = (event) => {
    event.preventDefault();
}
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
             <OptionList  setCurrent={(e)=>{
              this.setState({
                currentSelected:  e
              })
            }}/>
          </Column>
          <Column
            flex={3}
            style={{ backgroundColor: "white",margin:16,  zIndex: 0, paddingTop: 32 }}
          >
        
            <div id="root-component-container" onDrop ={this.onDrop} onDragOver={this.onDragOver} > 
            
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
