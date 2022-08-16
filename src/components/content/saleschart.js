import React, {useEffect} from "react";
import './saleschart.scss';
import {useSelector} from 'react-redux';


const Chart = ({ marginRight,  chartWidth, type, theme, container}) => {
  const {salesData} = useSelector((state) => state.dashboard);
  const {activePeriod} = useSelector((state) => state.dashboard);


  const getSalesData = () => {
      if(activePeriod === '7 days'){
        return salesData.sevenDays;
      }
      if(activePeriod === '30 days'){
        return salesData.thirtyDays;
      }
      return salesData
  }
  useEffect(() => {
  let Highcharts = window. Highcharts;

    Highcharts.getJSON(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
        function (data) {
      
          Highcharts.chart(`${container}`, {
            chart: {
              zoomType: 'x',
              backgroundColor:  theme,
            },
            title: null,
            subtitle: null,
            xAxis: {
                label: {
                  enabled: '',
                },
            },
           
            yAxis: {
                plotLines: null,
                showLastLabel: true,
                label: {
                  enabled: '',
                },

            },
            legend: {
              enabled: false
            },
            plotOptions: {
              area: {
                fillColor: {
                  linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                  },
                  stops: [
                    [0, '#fabfcd'],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
                },
                marker: {
                  radius: 2
                },
                lineWidth: 1,
                states: {
                  hover: {
                    lineWidth: 1
                  }
                },
                threshold: null
              }
            },
            series: [{
              type: 'area',
              name: 'USD to EUR',
              data: type === 'sales'? getSalesData() : data,
              color: '#EF2C5A',
              opacity: 0.5
            }]
          });
        }
      );
  })
    return (
        <div className={`info-graph`} >
             <figure style={{width: chartWidth, marginLeft: -marginRight}} className="highcharts-figure ">
                <div style={{height:'190px'}} 
                  id={`${container}`}></div>
                </figure>
         </div>
    )
    
}


export default Chart
