import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-first-web-part-web-part',
  templateUrl: './my-first-web-part-web-part.component.html',
  styleUrls: ['./my-first-web-part-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyFirstWebPartWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
