import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [`
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite; }

.progress-vertical {
  min-height: 250px;
  height: 250px;
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  margin-right: 20px; }

.progress-vertical-bottom {
  min-height: 250px;
  height: 250px;
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  margin-right: 20px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg); }

.progress-animated {
  -webkit-animation-duration: 5s;
  -webkit-animation-name: myanimation;
  -webkit-transition: 5s all;
  animation-duration: 5s;
  animation-name: myanimation;
  -o-transition: 5s all;
  transition: 5s all; }

@-webkit-keyframes myanimation {
  from {
    width: 0; } }

@keyframes myanimation {
  from {
    width: 0; } } `
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number = 15;
  progreso2: number = 25;

  
  public get getProgreso1() : string {
    return`${this.progreso1}%`
  }
  public get getProgreso2() : string {
    return`${this.progreso2}%`
  }

 
  

  constructor() { }

  ngOnInit(): void {
  }

}
