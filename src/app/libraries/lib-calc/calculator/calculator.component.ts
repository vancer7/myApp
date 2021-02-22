import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number | any;

  constructor() { }

  ngOnInit(): void {
  }

  add(v1: number,v2: number){
    // @ts-ignore
    this.result = parseFloat(v1) + parseFloat(v2)
  }
  subtract(v1: number,v2: number){
    // @ts-ignore
    this.result = parseFloat(v1) - parseFloat(v2)
  }
}
