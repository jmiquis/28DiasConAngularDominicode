import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBiddingComponent } from './event-bidding.component';

describe('EventBiddingComponent', () => {
  let component: EventBiddingComponent;
  let fixture: ComponentFixture<EventBiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBiddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
