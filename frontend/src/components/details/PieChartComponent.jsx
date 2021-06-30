import { React } from 'react';
import ReactApexChart from 'react-apexcharts';
import {
    getMaterialCompositionData,
    getMaterialCompositionLabels
} from 'interface/projectInterface';
//import theme from 'resources/theme';
/**
 * Pie Chart Diagram
 */

const PieChartComponent = () => {
    const series = getMaterialCompositionData();
    const labels = getMaterialCompositionLabels();

    console.log(series);
    console.log(labels);

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

        labels: labels,
        // TODO: color map
        // fill: {
        //     colors: [
        //         '#fae920',
        //         '#cfd6e3',
        //         '#eb8fa1',
        //         '#89b5c4',
        //         theme.color.Alminium,
        //         '#36a6c7',
        //         '#eb8323'
        //     ]
        // },
        responsive: [
            {
                breakpoint: 6400,
                options: {
                    chart: {
                        heigt: 'auto'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };
    //lassName='ChartItems' cause PieChart to overlap: needs to be fixed in charts_tables.css
    // works fine if className is taken out
    return (
        <div className='ChartItems' id='chart'>
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartComponent;
