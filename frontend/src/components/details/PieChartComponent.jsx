import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { getMaterialComposition } from 'interface/projectInterface';
import theme from 'resources/theme';

/**
 * Pie Chart Diagram
 *
 * @author Parham Gandomkar, Julian Oelhaf, Irem Toroslu
 */
const PieChartComponent = () => {
    //const series = [17, 13, 3, 2, 1, 42, 21];
    const series = getMaterialComposition();
    //series.sort();
    //series.reverse();
    // commented the two lines, because otherwise the numbers don't match the labels
    const options = {
        chart: {
            type: 'donut'
        },
        legend: {
            fontSize: theme.typography.chartItemstitle.fontSize,
            fontWeight: theme.typography.chartItemstitle.fontWeight
        },
        labels: [
            'Transformer oil',
            'Steel',
            'Pressboard',
            'Stainless steel',
            'Aluminium',
            'Silicon steel',
            'Copper'
        ],
        colors: [
            theme.color.TransformerOil,
            theme.color.Steel,
            theme.color.Pressboard,
            theme.color.StainlessSteel,
            theme.color.Alminium,
            theme.color.SiliconSteel,
            theme.color.Copper
        ],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: []
            }
        },
        responsive: [
            {
                breakpoint: 480,
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
        <div style={{ width: '400px', height: '300px' }} id='chart'>
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartComponent;
