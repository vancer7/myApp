import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result:number;

  constructor() { }

  ngOnInit(): void {
  }

  add(v1,v2){
    this.result = parseFloat(v1) + parseFloat(v2)
  }
  subtract(v1,v2){
    this.result = parseFloat(v1) - parseFloat(v2)
  }
}
