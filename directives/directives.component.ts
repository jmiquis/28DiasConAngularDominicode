import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {


  cities:string[] = ['Madrid','Barcelona','Bilbao','Zaragoza'];
  active:boolean  = true;

  constructor() { }

  ngOnInit(): void {
  }

}
