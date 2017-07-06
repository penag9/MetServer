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
//import { InquiryComponent } from './inquiry.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { UsersComponent } from './users.component';
import { MessageComponent } from './message.component';

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
  //{ path : 'inquiry',
  //  component : InquiryComponent
  //},
  { path : 'login',
    component : LoginComponent
  },
  { path : 'message',
    component : MessageComponent
  },
  { path : 'register',
    component : RegisterComponent
  }];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavComponent, HomeComponent, RequestComponent, 
                  LoginComponent, MessageComponent, RegisterComponent, UsersComponent,/* InquiryComponent*/ ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService ]
})
export class AppModule { }
