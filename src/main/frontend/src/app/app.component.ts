import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent }  from './nav.component';

@Component({
  selector: 'my-app',
  template: ` <nav routerLink="/"></nav> 
              <router-outlet></router-outlet>
              `,
})
export class AppComponent  { }