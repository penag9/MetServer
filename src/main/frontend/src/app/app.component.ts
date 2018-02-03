import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent }  from './navigation.component';

@Component({
  selector: 'my-app',
  template: ` <navigate routerLink="/"></navigate>  
              <router-outlet></router-outlet>
              `,
})
export class AppComponent  { }