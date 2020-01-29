import React, { Component } from 'react';
import { Row, Column } from "simple-flexbox";


class ButtonInfo extends Component{

    render(){
        return <Row style={{width:"100%"}}>
            <Column>
                <Row style={{padding: 16}}>
                    <h5 style={{color: "white", margin: 0}}>Properties</h5>
                </Row>
            </Column>
        </Row>
    }
}

export default ButtonInfo;