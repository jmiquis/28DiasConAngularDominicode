import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bidding',
  templateUrl: './event-bidding.component.html',
  styleUrls: ['./event-bidding.component.scss']
})
export class EventBiddingComponent implements OnInit {


  daysOfTheWeek:string[] = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
  selectedDay!:string;

  constructor() { }

  ngOnInit(): void {
  }

  selectedCity(day:string):void{
    this.selectedDay=day;
  }

}
