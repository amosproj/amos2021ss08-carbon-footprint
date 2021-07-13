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
            height: '150'
        },

        plotOptions: {
            bar: {
                columnWidth: '75%',
                BorderRadius: 10,
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
                fontSize: '10px',
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
                }
            }
        },
        xaxis: {
            categories: getLifeCycleStages(),
            labels: {
                rotate: -90,
                style: {
                    fontSize: 6.8
                }
            },
            responsive: [
                {
                    breakpoint: 6400,
                    options: {
                        chart: {
                            width: 600
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
