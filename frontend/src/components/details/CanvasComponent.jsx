/** 
in this main component come all the canvas page components 
such as diagrams and tables 

@author Parham Gandomkar, Irem Toroslu
*/

import React, { Component } from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import theme from 'resources/theme';
import CompareCanvas from './CompareCanvas';

class CanvasComponent extends Component {
    render() {
        /*
        if the loadComparePage state from its parrent (the detail Component) 
        is set to true, here the canvas page should be divided into two canvases
        */
        return (
            <div className='w3-row w3-container' fluid='true'>
                <div className='w3-row'>
                    <div className='w3-col l6 m6 s12 w3-left' style={{ marginTop: 30 }}>
                        <h3
                            style={{
                                fontSize: theme.typography.subtitle.fontSize,
                                fontWeight: theme.typography.subtitle.fontWeight,
                                lineHeight: theme.typography.subtitle.lineHeight,
                                letterSpacing: theme.typography.subtitle.letterSpacing,
                                marginLeft: 90
                            }}
                        >
                            {' '}
                                Results of the impact assessment{' '}
                        </h3>
                        <ColumnChart />
                    </div>
                    <div className='w3-col l6 m6 s12 w3-right' style={{ marginTop: 30 }}>
                        <h3
                            style={{
                                fontSize: theme.typography.subtitle.fontSize,
                                fontWeight: theme.typography.subtitle.fontWeight,
                                lineHeight: theme.typography.subtitle.lineHeight,
                                letterSpacing: theme.typography.subtitle.letterSpacing,
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
                    <div
                        className='w3-col l12 m12 s12'
                        style={{ marginTop: 30, marginBottom: 30 }}
                    >
                        <h3
                            style={{
                                fontSize: theme.typography.subtitle.fontSize,
                                fontWeight: theme.typography.subtitle.fontWeight,
                                lineHeight: theme.typography.subtitle.lineHeight,
                                letterSpacing: theme.typography.subtitle.letterSpacing
                            }}
                        >
                            {' '}
                                Impact categories{' '}
                        </h3>
                        <Table id='table-0' />
                    </div>
                </div>
            </div>
        );
    }
}


export default CanvasComponent;
