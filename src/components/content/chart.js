import React from "react";
import './chart.scss';

class Chart extends React.Component{
    componentDidMount(){
        let  Highcharts = window. Highcharts;
        const container = this.props.container;
        const {key, theme} = this.props

        console.log('KEY', this.props.key)
        Highcharts.getJSON(
            'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
            function (data) {
          
              Highcharts.chart(`${container}`, {
                chart: {
                  zoomType: 'x',
                  color: '#000',
                  backgroundColor:  theme,
                },
                title: null,
                subtitle: null,
                xAxis: {
                    plotLines: null,
                },
                yAxis: {
                    plotLines: null,
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
                        [0, Highcharts.getOptions().colors[0]],
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
                  data: data
                }]
              });
            }
          );
    }
    render(){
        const key =  this.props.key;

        return (
            <div className={`info-graph ${this.props.height}`} >
                 <figure className="highcharts-figure ">
                    <div style={{height:'130px'}} 
                    id={`${this.props.container}`}></div>
                    </figure>
             </div>
        )
    }
}


export default Chart

const  data = [10, 40, 100, 50, 60, 10,100, 200, 500, 600, 400, 100]