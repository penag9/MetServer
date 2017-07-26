import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent }  from './nav.component';

@Component({
  selector: 'my-app',
  template: ` <nav></nav> 
              <img id="title" src="logo.jpg">
              <router-outlet></router-outlet>
              `,
})
export class AppComponent  { }