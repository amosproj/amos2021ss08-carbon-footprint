/** 
in this main component come all the canvas page components 
such as diagrams and tables 

@author parham, 08.05
*/

import React, { Component } from 'react';
import DetailTable from './DetailTableComponent';
import PieChartDiagramComponent from './PieChartDiagramComponent';

class CanvasPage extends Component {
    state = {};
    render() {
        return (
            <div id='mainDiv' className='w3-container w3-padding-32'>
                <div className='w3-panel w3-2019-bluestone c3-margin-bottom w3-margin-top w3-padding-16'>
                    <h2 className='w3-opacity'>Canvas Page </h2>
                </div>
                <h3 className='w3-center c3-margin-bottom w3-margin-top'> Pie Chart Diagram </h3>

                <div
                    id='piDiv'
                    className='w3-padding-32'
                    style={{ width: '480px', height: '345.7px' }}
                >
                    <PieChartDiagramComponent></PieChartDiagramComponent>
                </div>
                <h3 className='w3-center c3-margin-bottom w3-margin-top'> Table comes here</h3>
                <div id='tableDiv' className='w3-padding-32'>
                    <DetailTable></DetailTable>
                </div>
            </div>
        );
    }
}

export default CanvasPage;
