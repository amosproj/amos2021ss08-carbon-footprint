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
            '#e2d000',
            theme.color.Steel,
            theme.color.Pressboard,
            theme.color.StainlessSteel,
            theme.color.Alminium,
            '#0084E1',
            theme.color.Copper
        ],
        responsive: [
            {
                breakpoint: 5600,
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
        <div className='ChartItems' style={{ width: '%100', height: '300px' }} id='chart'>
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartComponent;
