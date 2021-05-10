/**
 * the main component for detail page which includes  
 * canvas page and variable drop down list  
 * 
 * @author parham, 08.05  
 */

import React, { Component } from 'react';
import CanvasPage from './CanvasComponent';
import SelectVariable from './SelectVariableComponent';

class DetailInfo extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <h2>The choosen Model is {this.props.selectedModel}</h2>
                <SelectVariable></SelectVariable>
                <CanvasPage></CanvasPage>
            </React.Fragment>
        );
    }
}

export default DetailInfo;
