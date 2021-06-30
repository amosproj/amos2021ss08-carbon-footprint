import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
    getMaterialCompositionData,
    getMaterialCompositionLabels
} from 'interface/projectInterface';
import theme from 'resources/theme';

/**
 * Pie Chart Diagram
 *
 * @author Parham Gandomkar, Julian Oelhaf, Irem Toroslu
 */
const PieChartComponent = () => {
    const series = getMaterialCompositionData();
    const labels = getMaterialCompositionLabels();

    const options = {
        //TODO
        maintainAspectRatio: true,
        legend: {
            position: 'top',
            fontSize: 10
        },
        chart: {
            type: 'donut'
        },
        pie: {
            expandOnClick: true
        },
        labels: labels,
        // TODO: do the materials stay the same? otherwise doesn't make sense to use fixed color / hardcode them
        colors: [
            '#fae920',
            '#cfd6e3',
            '#eb8fa1',
            '#89b5c4',
            theme.color.Alminium,
            '#36a6c7',
            '#eb8323'
        ],
        responsive: [
            {
                breakpoint: 6400,
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
        <div className='ChartItems' id='chart'>
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartComponent;
