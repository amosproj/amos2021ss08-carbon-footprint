/** 
in this main component come all the canvas page components 
such as diagrams and tables 

@author parham, 08.05
*/

import React, { Component } from 'react';
import PieChartDiagramComponent from './PieChartDiagramComponent';
import './canvas.css';

class CanvasPage extends Component {
    state = {};
    render() {
        return (
            <div className='mainDiv'>
                <div className='w3-panel w3-2019-bluestone c3-margin-bottom w3-margin-top w3-padding-16'>
                    <h2 className='w3-opacity'>Canvas Page </h2>
                </div>

                <h3 className='c3-margin-bottom w3-margin-top'> Pie Chart Diagram </h3>
                <div
                    className='piDiv'
                    style={{
                        width: '50%',
                        height: '100px'
                    }}
                >
                    <PieChartDiagramComponent></PieChartDiagramComponent>
                </div>
            </div>
        );
    }
}

export default CanvasPage;
