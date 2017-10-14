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
var login_component_1 = require("./login.component");
var password_component_1 = require("./password.component");
var register_component_1 = require("./register.component");
var users_component_1 = require("./users.component");
var messages_component_1 = require("./messages.component");
var profile_component_1 = require("./profile.component");
var hire_vacation_component_1 = require("./requests/hire-vacation.component");
var apply_vacation_component_1 = require("./requests/apply-vacation.component");
var show_hire_vacation_table_component_1 = require("./show/show-hire-vacation-table.component");
var show_apply_vacation_table_component_1 = require("./show/show-apply-vacation-table.component");
var show_hire_vacation_component_1 = require("./show/show-hire-vacation.component");
var show_apply_vacation_component_1 = require("./show/show-apply-vacation.component");
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
    { path: 'login',
        component: login_component_1.LoginComponent
    },
    { path: 'password',
        component: password_component_1.PasswordComponent
    },
    { path: 'messages',
        component: messages_component_1.MessagesComponent
    },
    { path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    { path: 'request/APermanent',
        component: apply_vacation_component_1.AVComponent
    },
    { path: 'request/AVacation',
        component: apply_vacation_component_1.AVComponent
    },
    { path: 'request/AHollyday',
        component: apply_vacation_component_1.AVComponent
    },
    { path: 'request/HPermanent',
        component: hire_vacation_component_1.HVComponent
    },
    { path: 'request/HVacation',
        component: hire_vacation_component_1.HVComponent
    },
    { path: 'request/HHollyday',
        component: hire_vacation_component_1.HVComponent
    },
    { path: 'show/SHVacationTable',
        component: show_hire_vacation_table_component_1.ShowHireVacationTableComponent
    },
    { path: 'show/SAVacationTable',
        component: show_apply_vacation_table_component_1.ShowApplyVacationTableComponent
    },
    { path: 'show/SHVacation',
        component: show_hire_vacation_component_1.ShowHireVacationComponent
    },
    { path: 'show/SAVacation',
        component: show_apply_vacation_component_1.ShowApplyVacationComponent
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
            login_component_1.LoginComponent, password_component_1.PasswordComponent, messages_component_1.MessagesComponent, profile_component_1.ProfileComponent, register_component_1.RegisterComponent, users_component_1.UsersComponent,
            hire_vacation_component_1.HVComponent, apply_vacation_component_1.AVComponent, show_hire_vacation_table_component_1.ShowHireVacationTableComponent, show_apply_vacation_table_component_1.ShowApplyVacationTableComponent,
            show_hire_vacation_component_1.ShowHireVacationComponent, show_apply_vacation_component_1.ShowApplyVacationComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [web_service_1.WebService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map