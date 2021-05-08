/**
 * Pie Chart Diagram
 *
 * @author parham, 09.05
 */
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartDiagramComponent = () => {
    const series = [44, 55, 41, 17, 15, 42, 21];
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
            'Copper',
            'Silicon steel'
        ],
        colors: ['#2596be', '#d3eaf2', '#1a6985', '#3ba1c5', '#0b2d39', '#92cbdf', '#040f13'],
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
