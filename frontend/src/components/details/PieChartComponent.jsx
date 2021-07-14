import { React } from 'react';
import ReactApexChart from 'react-apexcharts'; //https://apexcharts.com/docs/react-charts/
import {
    getMaterialCompositionData,
    getMaterialCompositionLabels
} from 'interface/projectInterface';
/**
 * Pie Chart Diagram
 * @scenarioName - props to specify whether we need values for Modified/Baseline Scenario
 */

const PieChartComponent = (props) => {
    const series = getMaterialCompositionData(props.scenarioName);
    const labels = getMaterialCompositionLabels(props.scenarioName);

    const options = {
        maintainAspectRatio: true,
        legend: {
            position: 'top',
            fontSize: 14
        },
        chart: {
            type: 'donut',
            height: 'auto'
        },

        labels: labels,

        responsive: [
            {
                breakpoint: 6400,
                options: {
                    chart: {
                        height: '350px'
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
            <ReactApexChart options={options} series={series} type='donut' height={350} />
        </div>
    );
};

export default PieChartComponent;
