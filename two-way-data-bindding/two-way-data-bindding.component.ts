import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-bindding',
  templateUrl: './two-way-data-bindding.component.html',
  styleUrls: ['./two-way-data-bindding.component.scss']
})
export class TwoWayDataBinddingComponent implements OnInit {


  name!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
