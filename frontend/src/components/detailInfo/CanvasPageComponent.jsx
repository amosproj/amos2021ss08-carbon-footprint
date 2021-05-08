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
                <h2 className='c3-margin-bottom w3-margin-top'> Canvas Page </h2>
                <h3 className='c3-margin-bottom w3-margin-top'> Pie Chart Diagram </h3>
                <div
                    className='piDiv w3-margin-top'
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
