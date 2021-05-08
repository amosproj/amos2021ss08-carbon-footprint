/** 
in this main component come all the canvas page components 
such as diagrams and tables 

@author parham, 08.05
*/

import React, { Component } from 'react';
import PieChartDiagramComponent from './PieChartDiagramComponent';

class CanvasPage extends Component {
    state = {};
    render() {
        return (
            <div>
                <h2 className='c3-margin-bottom w3-margin-top'> Canvas Page </h2>
                <h3 className='c3-margin-bottom w3-margin-top'> Pie Chart Diagram </h3>
                <PieChartDiagramComponent></PieChartDiagramComponent>
            </div>
        );
    }
}

export default CanvasPage;
