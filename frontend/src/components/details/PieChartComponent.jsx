import { React, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {
    getMaterialCompositionData,
    getMaterialCompositionLabels
} from 'interface/projectInterface';
import theme from 'resources/theme';
import LoadingComponent from 'components/loading';
/**
 * Pie Chart Diagram
 *
 * @author Parham Gandomkar, Julian Oelhaf, Irem Toroslu
 *
 */

const PieChartComponent = () => {
    const [series, setSeries] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        async function getValues() {
            const values = await Array.from(getMaterialCompositionData());
            setSeries(values);

            console.log(values);
        }
        getValues();
        console.log('inside use effect');
    }, []);
    useEffect(() => {
        async function getLabels() {
            const label = await Array.from(getMaterialCompositionLabels());
            setLabels(label);
            console.log(label);
        }
        getLabels();
        console.log('inside use effect');
    }, []);

    console.log('after');
    console.log(series);
    console.log(labels);
    if (
        (series && labels === []) ||
        (series && labels === undefined) ||
        (series && labels === null)
    ) {
        return <LoadingComponent />;
    }
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
        <div className='ChartItems' id='chart'>
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartComponent;
