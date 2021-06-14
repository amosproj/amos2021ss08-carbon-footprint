import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { getImpactAssessmentData, getLifeCycleStages } from 'interface/projectInterface';
import theme from 'resources/theme';

/**
 * Column Chart
 *
 * @author Julian Oelhaf
 */
const ColumnChartComponent = () => {
    const series = [
        {
            name: 'Global warming in kg CO2 equivalents',
            // TODO: this data needs to be recieved from backend
            data: getImpactAssessmentData()
        }
    ];

    const options = {
        chart: {
            type: 'bar',
            height: '150'
        },

        plotOptions: {
            bar: {
                columnWidth: '70%',
                BorderRadius: 10,
                dataLabels: {
                    position: 'top' // top, center, bottom
                }
            }
        },
        fill: {
            colors: ['#21cc82']//['#2cb5de']
        },

        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + '%';
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors:  ['#21cc82']
            }
        },
        yaxis: {
            title: {
                text: 'Global warming in kg CO2 equivalents'
            },
            min: -100,
            max: 100,
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + '%';
                }
            }
        },
        xaxis: {
            categories: getLifeCycleStages(),
            labels: {
                rotate: -90,
                style: {
                    fontSize: 10
                }
            },
            responsive: [
                {
                    breakpoint: 300,
                    options: {
                        chart: {
                            width: 500
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        }
    };

    return (
        <div className='ChartItems' id='chart'>
            <ReactApexChart options={options} series={series} type='bar' height={350} />
        </div>
    );
};

export default ColumnChartComponent;
