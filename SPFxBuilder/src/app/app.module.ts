import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MyFirstWebPartWebPartComponent } from './my-first-web-part-web-part/my-first-web-part-web-part.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    MyFirstWebPartWebPartComponent,
    SampleformComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [MyFirstWebPartWebPartComponent,SampleformComponent,MyProfileComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MyFirstWebPartWebPartComponent, { injector: this.injector });
    customElements.define('app-my-first-web-part-web-part', el);

    const el2 = createCustomElement(SampleformComponent, { injector: this.injector });
    customElements.define('app-sampleform', el2);

    const el3 = createCustomElement(MyProfileComponent, { injector: this.injector });
    customElements.define('app-my-profile', el3);
  }
}
