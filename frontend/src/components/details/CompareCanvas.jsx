import React from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import TableComponent from './TableComponent';
import theme from 'resources/theme';
import PanelComponent from './PanelComponent';
import { IconHeart } from 'assets/icons';
import iconHeart from 'assets/icons/icon-heart';

/**
 * This component displays the difference/comparison between the dashboards of two different type of variables of the same model
 * will be compared when clicking on the "comparison" button.
 *
 * @returns the dasboard comparison
 * @author Parham Gandomkar, Irem Toroslu
 *
 *
 */

const CompareCanvas = () => {
    return (
        <div className='w3-row w3-container' fluid='true'>
            <div className='w3-col l6 m6 s6 w3-left'>
                <div
                    className='w3-panel w3-padding-small'
                    style={{ backgroundColor: '#466e78', height:50 }}
                > 
                <h2
                    className='w3-opacity'
                    style={{
                        color: 'white',
                        fontSize: theme.typography.subtitle.fontSize,
                        fontWeight: theme.typography.subtitle.fontWeight,
                        lineHeight: theme.typography.subtitle.lineHeight,
                        letterSpacing: theme.typography.subtitle.letterSpacing,
                        marginTop: 6
                    }}
                    >
                        Baseline Scenario
                    </h2>
                </div>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 60
                        }}
                    >
                        {' '}
                        Material Composition{' '}
                    </h3>
                    <PieChart />
                </div>
                
                <div className='w3-col l5 m5 s5 w3-right w3-width:100%'>
                <div
                    className='w3-panel w3-padding-small '
                    style={{ backgroundColor: '#466e78', height:50 }}
                > 
                    <h2
                        className='w3-opacity'
                        style={{
                            fontColor: 'black',
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginTop: 0
                        }}
                        >   Baseline Scenario
                    </h2>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 60
                        }}
                    >
                        {' '}
                        Material Composition{' '}
                    </h3>
                    <PieChart />
                </div>
            </div>
            <div className='w3-row'>
                <div className='w3-col l6 m6 s6 w3-left w3-padding'>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 80
                        }}
                    >
                        {' '}
                        Results of the impact assessment{' '}
                    </h3>
                    <ColumnChart />
                </div>
                <div className='w3-col l6 m6 s6 w3-right w3-padding'>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 80
                        }}
                    >
                        {' '}
                        Results of the impact assessment{' '}
                    </h3>
                    <ColumnChart />
                </div>
            </div>

            <div className='w3-row'>
                <div className='w3-col l12 m12 s12' style={{ marginTop: 30, marginBottom: 30 }}>
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
                    <TableComponent id='table-1' />
                </div>
            </div>
            <div className='w3-row'>
                <div className='w3-col l12 m12 s12' style={{ marginTop: 30, marginBottom: 30 }}>
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
                    <div style={{ marginBottom: 30 }}>
                        <TableComponent id='table-2' />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default CompareCanvas;
