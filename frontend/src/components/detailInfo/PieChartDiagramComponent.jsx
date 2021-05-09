/**
 * Pie Chart Diagram
 *
 * @author parham, 09.05
 */
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartDiagramComponent = () => {
    const series = [17, 13, 3, 2, 1, 42, 21];
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
                        height: '400px'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };

    return (
        <div id='chart'>
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartDiagramComponent;
