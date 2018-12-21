import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingWpWebPartComponent } from './greeting-wp-web-part.component';

describe('GreetingWpWebPartComponent', () => {
  let component: GreetingWpWebPartComponent;
  let fixture: ComponentFixture<GreetingWpWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingWpWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingWpWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
