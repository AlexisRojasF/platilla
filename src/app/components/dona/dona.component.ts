import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {


  @Input() titulo: string = '';
  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
 @Input('data')doughnutChartData: MultiDataSet = [
    [350, 450, 100],

  ];


  constructor() { }

  ngOnInit(): void {
  }

  colors: Color[] = [
    {backgroundColor:['#9120e','#ff5800','#ff1414']}
  ]


}
