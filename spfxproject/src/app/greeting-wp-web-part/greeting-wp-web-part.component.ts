import { Component, Input, OnInit, ViewEncapsulation,ChangeDetectorRef } from '@angular/core';
import { GreetingService } from './greeting.service';
//import { sp, Web } from "@pnp/sp";

@Component({
  selector: 'app-greeting-wp-web-part',
  templateUrl: './greeting-wp-web-part.component.html',
  styleUrls: ['./greeting-wp-web-part.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [GreetingService],
})
export class GreetingWpWebPartComponent implements OnInit {
  public userName: string = "";
  public userJobTitle: string = "";
  public webSiteTitle: string = "";
  public welComeMessage: string = "";
  public userImageUrl: string = "";
  @Input() issharepoint: boolean = false;

  public greetingMessage: string = "";
  public prefixWelcomeMessage: string = "Welcome to ";
  constructor(private greetingService: GreetingService, private cd: ChangeDetectorRef) {
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

    if (this.userImageUrl.length == 0) this.userImageUrl = "https://miro.medium.com/max/2400/1*vmWLIgxv98WCdZ1yKkiNeA.jpeg";

    if (this.issharepoint) {
      this.getCurrentUserInformation();
      console.log('----------------------------');
      console.log(this.webSiteTitle);
      console.log(this.userImageUrl);
      console.log(this.userJobTitle);
      console.log(this.userName);
      console.log('----------------------------');
    }

  }
  public getCurrentUserInformation() {

    this.greetingService.getCurrentUserInformation().then(ig => {
      this.webSiteTitle =this.prefixWelcomeMessage+ ig.webSiteTitle;
      this.userImageUrl = ig.userImageUrl;
      this.userName = ig.userName;
      this.userJobTitle = ig.userJobTitle;

      console.log(this.webSiteTitle);
      console.log(this.userImageUrl);
      console.log(this.userJobTitle);
      console.log(this.userName);

      this.cd.detectChanges();
    });



  }
}
