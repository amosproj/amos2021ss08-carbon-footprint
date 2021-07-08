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
            height: '150px',

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
                    fontSize: 6.8,
                }
            },
            responsive: [
                {
                    breakpoint: 300,
                    options: {
                        chart: {
                            height: 360,
                            width:200,
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
        <div id='chart'>
            <ReactApexChart options={options} series={series} type='bar' height={360}  width={350} />
        </div>
    );
};

export default ColumnChartComponent;
