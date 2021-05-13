/**
 * Pie Chart Diagram
 *
 * @author parham, Julian
 */
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getMaterialComposition } from 'interface/projectInterface';

const PieChartDiagramComponent = () => {
    //const series = [17, 13, 3, 2, 1, 42, 21];
    const series = getMaterialComposition();
    //series.sort();
    //series.reverse();
    // commented the two lines, because otherwise the numbers don't match the labels
    const options = {
        chart: {
            type: 'donut'
        },
        labels: [
            'Transformer oil',
            'Steel',
            'Pressboard',
            'Stainless steel',
            'Aluminium',
            'Silicon steel',
            'Copper'
        ],
        colors: ['#040f13', '#0b2d39', '#165a72', '#2596be', '#3ba1c5', '#00308F', '#d3eaf2'],
        fill: {
            type: 'gradient'
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: '300px'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };

    return (
        <div style={{ width: '400px', height: '300px' }} id='chart'>
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartDiagramComponent;
