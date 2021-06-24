import { React, useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getColumnChartData, getLifeCycleStages } from 'interface/projectInterface';

/**
 * Column Chart
 *
 */
const ColumnChartComponent = () => {
    const [values, setValues] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const values = Array.from(getColumnChartData());
            setValues(values);
            setLoading(false);
        };
        fetchData();
    }, []);

    const series = [
        {
            name: 'Global warming in kg CO2 equivalents',
            // TODO: this data needs to be recieved from backend
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
                columnWidth: '70%',
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
                fontSize: '12px',
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
    if (isLoading) {
        return <div> Loading ... </div>;
    } else {
        return (
            <div className='ChartItems' id='chart'>
                <ReactApexChart options={options} series={series} type='bar' height={350} />
            </div>
        );
    }
};

export default ColumnChartComponent;
