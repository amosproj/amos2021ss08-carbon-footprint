import { React } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getColumnChartData, getLifeCycleStages } from 'interface/projectInterface';

/**
 * Column Chart
 * Recieves the data from projectInterface.js using "getColumnChartData()"
 * populates the data ito the column chart in Details Page.
 * The categories are fixed. Recieves the categories from projectInterface.js using "getLifeCycleStages()"
 * Those categories represent the life cycle stages. They don't change - there are the same for all products and projects.
 * Look up: https://apexcharts.com/docs/react-charts/ for the chart options specified
 * @param {*} props.scenarioName - props to spicify whether we need values for Modified/Baseline Scenario
 */

const ColumnChartComponent = (props) => {
    const values = getColumnChartData(props.scenarioName);
    const series = [
        {
            name: 'Global warming in kg CO2 equivalents',
            data: values
        }
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 'auto',
            toolbar: {
                show: false
            }
        },

        plotOptions: {
            bar: {
                columnWidth: '70%',
                borderRadius: 5,
                dataLabels: {
                    position: 'top' // top, center, bottom
                }
            }
        },
        fill: {
            colors: ['#21cc82'] //['#2cb5de']
        },

        dataLabels: {
            enabled: true,
            formatter: function (value) {
                return value + '%';
            },
            offsetY: -20,
            style: {
                fontSize: '14px',
                colors: ['#21cc82']
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
                },
                style: {
                    fontSize: 14
                }
            }
        },
        xaxis: {
            categories: getLifeCycleStages(),
            labels: {
                style: {
                    fontSize: 14
                }
            }
        },
        dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
        }
    };

    return (
        <div id='chart'>
            <ReactApexChart
                options={options}
                series={series}
                type='bar'
                height={350}
                width={'100%'}
            />
        </div>
    );
};

export default ColumnChartComponent;
