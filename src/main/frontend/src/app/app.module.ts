import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WebService } from './web.service';

import { AppComponent }  from './app.component';
import { NavComponent }  from './nav.component';
import { HomeComponent } from './home.component';
import { RequestComponent } from './request.component';
import { LoginComponent } from './login.component';
import { PasswordComponent } from './password.component';
import { RegisterComponent } from './register.component';
import { UsersComponent } from './users.component';
import { MessagesComponent } from './messages.component';
import { ProfileComponent } from './profile.component';
import { HVComponent } from './requests/hire-vacation.component';
import { AVComponent } from './requests/apply-vacation.component';
import { ShowHireVacationTableComponent } from './show/show-hire-vacation-table.component';
import { ShowApplyVacationTableComponent } from './show/show-apply-vacation-table.component';
import { ShowHireVacationComponent } from './show/show-hire-vacation.component';
import { ShowApplyVacationComponent } from './show/show-apply-vacation.component';
import { AdminComponent } from './admin.component';

let routes = [
  { path : '',
    component : HomeComponent
  },
  { path : 'request',
    component : RequestComponent
  },
  { path : 'users',
    component : UsersComponent
  },
  { path : 'login',
    component : LoginComponent
  },
  { path : 'password',
    component : PasswordComponent
  },
  { path : 'messages',
    component : MessagesComponent
  },
  { path : 'profile',
    component : ProfileComponent
  },
  { path : 'request/APermanent',
    component : AVComponent
  },
  { path : 'request/AVacation',
    component : AVComponent
  },
  { path : 'request/AHollyday',
    component : AVComponent
  },
  { path : 'request/HPermanent',
    component : HVComponent
  },
  { path : 'request/HVacation',
    component : HVComponent
  },
  { path : 'request/HHollyday',
    component : HVComponent
  },
  { path : 'show/SHVacationTable',
    component : ShowHireVacationTableComponent
  },
  { path : 'show/SAVacationTable',
    component : ShowApplyVacationTableComponent
  },
  { path : 'show/SHVacation',
    component : ShowHireVacationComponent
  },
  { path : 'show/SAVacation',
    component : ShowApplyVacationComponent
  },
  { path : 'admin',
    component : AdminComponent
  },
  { path : '**',
    component : HomeComponent
  }];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavComponent, HomeComponent, RequestComponent,
                  LoginComponent, PasswordComponent, MessagesComponent, ProfileComponent, RegisterComponent, UsersComponent,
                  HVComponent, AVComponent, ShowHireVacationTableComponent ,ShowApplyVacationTableComponent,
                   ShowHireVacationComponent, ShowApplyVacationComponent, AdminComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService ]
})
export class AppModule { }
