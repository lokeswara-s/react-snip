import React, { Component } from 'react';
import ButtonInfo from './ObjectPropertiesPartials/ButtonInfo';

const ComponentWrapper = {
    BUTTON: ButtonInfo
}


class ObjectProperties extends Component{
    render(){
        let {
            information
        } = this.props;
        let VisibleInfo = ComponentWrapper[information.type];
        return <div>
            {
                <VisibleInfo />
            }
        </div>
    }
}
export default ObjectProperties;