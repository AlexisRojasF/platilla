import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';
declare function funciones():void ;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private serviceSetting:SettingService) { }


  
 

  ngOnInit(): void {
    funciones();
   
  }

}
