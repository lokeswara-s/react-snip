import React from 'react';
import { Row, Column } from 'simple-flexbox';

class OptionList extends React.Component{
    state = {
        menu: 0
    }
    onDragOver = (event) => {
        ev.dataTransfer.setData("text/html", ev.target.id);
    }
    render(){
        return(
        <div style={{padding: 36, textAlign: "left"}}>   
                <Row style={{alignItems: "center", paddingBottom:8}}>
                <p style={{display: "inline", color:"white", fontSize: 12}}>  Grid count: </p> &nbsp; <select value={this.state.menu} onChange={(e)=>this.setState({menu: e.target.value})}> 
                {
                    [0,1,2,3,4,5,6,7,8].map(item=>{
                        return <option value={item}>{item}</option>
                    })
                } 
            </select>
                </Row>
            <Row style={{cursor:"pointer", alignItems: "stretch"}} draggable="true" id="col-spans" onMouseDown={(e)=>{
                console.log(e.target.parentElement.id )
                this.props.setCurrent(e.target.parentElement.id )
            }} onDragStart={(ev)=>{
                ev.dataTransfer.setData("text/html", ev.target.parentElement.id );
            }}>
                {
                   Array.apply(null, { length: this.state.menu }).map((e, i) => (
                    <Column style={{padding:8, border:"1px solid black", backgroundColor:"white", width:"100%"}} key={i}>
                      col
                    </Column>
                  ))
                }
            </Row>
        </div>
        )

    }
}

export default OptionList;