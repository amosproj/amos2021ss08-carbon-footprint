/** 
in this main component come all the canvas page components 
such as diagrams and tables 

@author Parham Gandomkar, Irem Toroslu
*/

import React, { Component } from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';

class CanvasComponent extends Component {
    render() {
        /*
        if the loadComparePage state from its parrent (the detail Component) 
        is set to true, here the canvas page should be divided into two canvases
        */
        return (
            <div className='w3-row w3-container' fluid='true' style={{ padding: 0 }}>
                <div className='w3-row'>
                    <div className='w3-col l6 m12 s12 w3-left' style={{ marginTop: 30 }}>
                        <h3
                            className='ChartItemsTitle'
                            style={{
                                marginLeft: 85
                            }}
                        >
                            {' '}
                            Results of the impact assessment{' '}
                        </h3>
                        <ColumnChart />
                    </div>
                    <div className='w3-col l6 m12 s12 w3-right' style={{ marginTop: 30 }}>
                        <h3
                            className='ChartItemsTitle'
                            style={{
                                marginLeft: 100
                            }}
                        >
                            {' '}
                            Material Composition{' '}
                        </h3>
                        <PieChart />
                    </div>
                </div>
                <div className='w3-row'>
                    <div className='w3-col l12 m12 s12' style={{ marginTop: 30, marginBottom: 30 }}>
                        <h3 className='ChartItemsTitle'> Impact categories </h3>
                        <Table id='table-0' />
                    </div>
                </div>
            </div>
        );
    }
}

export default CanvasComponent;
