import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstWebPartWebPartComponent } from './my-first-web-part-web-part.component';

describe('MyFirstWebPartWebPartComponent', () => {
  let component: MyFirstWebPartWebPartComponent;
  let fixture: ComponentFixture<MyFirstWebPartWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstWebPartWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstWebPartWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
