import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { GreetingWpWebPartComponent } from './greeting-wp-web-part/greeting-wp-web-part.component';

@NgModule({
  declarations: [
    GreetingWpWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [GreetingWpWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(GreetingWpWebPartComponent, { injector: this.injector });
    customElements.define('app-greeting-wp-web-part', el);
  }
}
