/**
 * the main component for detail page which includes  
 * canvas page and variable drop down list  
 * 
 * @author parham, 08.05  
 */

import React, { Component } from 'react';
import CanvasPage from './CanvasPageComponent';
import SelectVariable from './SelectVariable';

class DetailInfo extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <h2 className='w3-margin-bottom'>
                    The choosen Model is {this.props.selectedModel}
                </h2>
                <SelectVariable className='w3-section'></SelectVariable>
                <CanvasPage></CanvasPage>
            </React.Fragment>
        );
    }
}

export default DetailInfo;
