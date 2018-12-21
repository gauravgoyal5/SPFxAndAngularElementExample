import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-greeting-wp-web-part',
  templateUrl: './greeting-wp-web-part.component.html',
  styleUrls: ['./greeting-wp-web-part.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GreetingWpWebPartComponent implements OnInit {
  @Input() userName: string = "";
  @Input() userJobTitle: string = "";
  @Input() webSiteTitle: string = "";
  @Input() welComeMessage: string = "";
  @Input() userImageUrl: string="";

  greetingMessage: string = "";
  prefixWelcomeMessage: string = "Welcome to ";
  constructor() {
    console.log(this.userImageUrl);
   }

  ngOnInit() {

    if ((new Date()).getHours() > 0 && (new Date()).getHours() < 12)
      this.greetingMessage = "Good Morning ";
    else if ((new Date()).getHours() >= 12 && (new Date()).getHours() <= 5)
      this.greetingMessage = "Good Afternoon ";
    else if ((new Date()).getHours() > 5)
      this.greetingMessage = "Good Evening ";

    if (this.userName.length == 0) this.userName = "Gaurav Goyal";

    if (this.userJobTitle.length == 0) this.userJobTitle = "Product Manager";

    if (this.webSiteTitle.length == 0) this.webSiteTitle = this.prefixWelcomeMessage + "Demo of Welcome SPFx Web Part";

    if (this.welComeMessage.length == 0) this.welComeMessage = this.greetingMessage + this.userName;

    if(this.userImageUrl.length==0) this.userImageUrl="https://miro.medium.com/max/2400/1*vmWLIgxv98WCdZ1yKkiNeA.jpeg";

    console.log(this.userImageUrl);

  }

}
