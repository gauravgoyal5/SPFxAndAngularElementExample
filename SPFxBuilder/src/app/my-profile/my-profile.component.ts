import { Component, OnInit, Input } from '@angular/core';
import { getRandomString } from "@pnp/common";
import {sp, Web } from "@pnp/sp";
import { setup as pnpSetup } from "@pnp/common";


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  @Input() ctxnew: any;
  randoNumber:string;
  currentUser:string;
  constructor() { }

  ngOnInit() {
    pnpSetup({
      spfxContext: window["ctxnew2"]
    });
    this.randoNumber= getRandomString(20);
    this.getData();

  }

  async getData(){
    const web = new Web("https://crm044196.sharepoint.com/sites/BizDemp");
    const w = await web.get();
    console.log('Gaurav');
    console.log(w);
    const c=await sp.web.currentUser.get();
    console.log(c);
  }

}
