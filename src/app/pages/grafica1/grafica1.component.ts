import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {


public labels1: Label[] = ['asasa Sales', 'In-Store Sales', 'Mail-asas Sales'];
  public labels2: Label[] = ['asasa qq', 'In-Store qq', 'Mail-asas qq'];
  
  data:any[] =[500,200,100]

  constructor() { }

  ngOnInit(): void {
  }

 


}
