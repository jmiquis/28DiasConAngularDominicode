import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  title:string = 'this is the interpoled value of an attribute';
  image:string = '..\\assets\\free-icon-png-17.png';
  constructor() { }

  ngOnInit(): void {
  }

}
