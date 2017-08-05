"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var web_service_1 = require("./web.service");
var LoginComponent = (function () {
    function LoginComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.data = {
            username: '',
            password: ''
        };
        this.rememberMe = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.login = function () {
        /*
         if(webService.login(data)) ;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Неверный логин или пароль';
        }*/
        if (this.data.username == 'A' && this.data.password == 'A') {
            if (this.rememberMe) {
                localStorage.setItem('username', 'A');
            }
            this.webService.isAuthenticated = true;
            this.webService.currentUser = this.data.username;
            this.errorMessage = '';
            this.router.navigate(['/']);
        }
        else {
            this.errorMessage = 'Неверный логин или пароль';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: " \n    <h1 class=\"center\"> \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C (\u0434\u043B\u044F \u0434\u0435\u043C\u043E - \u0410 \u0410 )</h1>\n    <h1 style=\"color: red\"> {{errorMessage}} </h1>\n    \n    <form #f=\"ngForm\" (ngSubmit)=\"login()\">\n        <p>\n            <label> Username / Email / Phone : </label>\n            <input type=\"text\"  \n                [(ngModel)]=\"data.username\" required  name=\"username\" >\n        </p>\n        <p>\n            <label> \u041F\u0430\u0440\u043E\u043B\u044C : </label>\n            <input type=\"password\"  \n                [(ngModel)]=\"data.password\" required  name=\"password\">\n        </p>\n        <p> \n            <a href=\"\" class=\"tab\"> \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C? </a> <br>\n            <input type=\"checkbox\" [(ngModel)]=\"rememberMe\" name=\"rememberMe\"> \u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C <br>\n        </p>\n        <p>\n            <button type=\"submit\" [disabled]=\"!f.valid\">\u0412\u043E\u0439\u0442\u0438</button>\n            <button  type=\"button\" onclick=\"history.back()\"> \u041E\u0431\u0440\u0430\u0442\u043D\u043E </button>\n        </p>\n    </form>\n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map