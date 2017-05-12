import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from 'ng2-nvd3';
declare let d3: any;

@Component({
  selector: 'app-chart',
  entryComponents: [nvD3],
  template: `<div> <nvd3 [options]="options" [data]="data"></nvd3></div>`
})

export class Dashboard implements OnInit, AfterViewInit {
  options;
  data;

  constructor(){

        } 

  @ViewChild(nvD3)
  nvD3: nvD3;


  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 350,
        margin : {
          top: 15,
          right: 15,
          bottom: 40,
          left: 45
        },
        x: function(d) { return d.label; },
        y: function(d) { return d.value; },
        showValues: true,
        showLabels: true,     //Display pie labels
        labelThreshold: 0.05,  //Configure the minimum slice size for labels to show up
        labelType: 'value', // Can be "key", "value" or "percent"
        donut: true,          //Turn on Donut mode. Makes pie chart look tasty!
        donutRatio: 0.35,     //Configure how big you want the donut hole size to be.
        valueFormat: function(d){
          return d3.format(',.4d')(d);
        },
        duration: 300,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    };
    this.data = [
      { 'label': 'storeFeeder',
        'value' : 20
      },
      {
        'label': 'Ebay',
        'value' : 30
      },
      {
        'label': 'PayPal',
        'value' : 10
      },
      { 'label': 'Amazon',
        'value' : 40
      }
    ];
  }

  ngAfterViewInit() {
    //  to update the chart .
   // this.nvD3.chart.update();
  }
}

