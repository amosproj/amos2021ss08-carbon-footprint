import { React } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getColumnChartData, getLifeCycleStages } from 'interface/projectInterface';

/**
 * Column Chart
 * Recieves the data from projectInterface.js using "getColumnChartData()"
 * populates the data ito the column chart in Details Page.
 */
const ColumnChartComponent = () => {
    const values = getColumnChartData();
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
            formatter: function (val) {
                return val + '%';
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
                rotate: -90,
                style: {
                    fontSize: 14
                }
            }
        }
            ]
        }
    };

    return (
        <div id='chart'>
            <ReactApexChart options={options} series={series} type='bar' height={300} width={550} />
        </div>
    );
};

export default ColumnChartComponent;
