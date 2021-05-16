/**
 * Column Chart
 *
 * @author Julian Oelhaf
 */
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import {getResultsImpactAssessment} from 'interface/projectInterface';
import theme from 'resources/theme';

const ColumnChartComponent = () => {
    const series = [{
        name: 'Global warming in kg CO2 equivalents',
        // TODO: this data needs to be recieved from backend
        data : getResultsImpactAssessment()
        
    }];

    const options = {
        chart: {
          type: 'bar',
          height: '150'
        },
        
        plotOptions: {
          bar: {
            //color: '#00308F',
            columnWidth: '60%',
          }
          
        },
        fill: {
          colors: [theme.uniformStyle.color.barChartColor]//['#00bcd4'] 0CA8CA 52bfb2,
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          
          title: {
            text: 'Global warming in kg CO2 equivalents',
          },
          min: -100,
          max: 100,
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "%";
            },
            style: {
              fontSize: theme.typography.chartItemstitle.fontSize,
              fontWeight: theme.typography.chartItemstitle.fontWeight
          }


          }
        },
        xaxis: {
          categories: [
            'Materials', 'Manufacturing and Transport', 'Operation 30a (75% load)', 'End of Life'
          ],
          labels: {
            rotate: -90,
            style: {
              fontSize: theme.typography.chartItemstitle.fontSize,
              fontWeight: theme.typography.chartItemstitle.fontWeight
          }
          }
        }
    };
    
    
    

    return (
        <div id='chart'>
            <ReactApexChart options={options} series={series} type="bar" color='green' height={350} />
        </div>
    );

}

export default ColumnChartComponent;

