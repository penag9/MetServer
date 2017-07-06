"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var web_service_1 = require("./web.service");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav.component");
var home_component_1 = require("./home.component");
var request_component_1 = require("./request.component");
//import { InquiryComponent } from './inquiry.component';
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var users_component_1 = require("./users.component");
var message_component_1 = require("./message.component");
var routes = [
    { path: '',
        component: home_component_1.HomeComponent
    },
    { path: 'request',
        component: request_component_1.RequestComponent
    },
    { path: 'users',
        component: users_component_1.UsersComponent
    },
    //{ path : 'inquiry',
    //  component : InquiryComponent
    //},
    { path: 'login',
        component: login_component_1.LoginComponent
    },
    { path: 'message',
        component: message_component_1.MessageComponent
    },
    { path: 'register',
        component: register_component_1.RegisterComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, home_component_1.HomeComponent, request_component_1.RequestComponent,
            login_component_1.LoginComponent, message_component_1.MessageComponent, register_component_1.RegisterComponent, users_component_1.UsersComponent,],
        bootstrap: [app_component_1.AppComponent],
        providers: [web_service_1.WebService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map