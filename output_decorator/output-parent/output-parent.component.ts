import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.scss']
})
export class OutputParentComponent implements OnInit {


  items:string[]=['Item 1', 'Item 2','Item 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
