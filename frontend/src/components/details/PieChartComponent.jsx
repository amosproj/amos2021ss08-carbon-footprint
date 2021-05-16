/**
 * Pie Chart Diagram
 *
 * @author parham, Julian
 */
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getMaterialComposition} from 'interface/projectInterface';
import theme from 'resources/theme';

const PieChartDiagramComponent = () => {
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
            fontSize: theme.typography.chartItemstitle.fontSize
          },
        labels: 
        [
            'Transformer oil',
            'Steel',
            'Pressboard',
            'Stainless steel',
            'Aluminium',
            'Silicon steel',
            'Copper'
        ],
        colors: [theme.color.TransformerOil, theme.color.Steel, theme.color.Pressboard, theme.color.StainlessSteel, theme.color.Alminium, theme.color.SiliconSteel, theme.color.Copper],
        fill: {
            type: 'gradient'
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: '400px'
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
            <ReactApexChart options={options} series={series} type='donut' />
        </div>
    );
};

export default PieChartDiagramComponent;
