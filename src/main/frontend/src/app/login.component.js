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
        this.newUser = false;
        this.rememberMe = false;
        this.passwordRecovery = '';
        this.errorMessage = '';
        this.noEmailError = true;
        this.noPasswordError = true;
        this.noRepeatError = true;
    }
    LoginComponent.prototype.login = function () {
        /*
         if(webService.login(data)) ;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Неверный логин или пароль';
        }*/
        if (this.data.username.indexOf('@') == -1 || this.data.username.indexOf('.') == -1) {
            this.errorMessage = 'Неправильный емайл';
            this.noEmailError = false;
            return;
        }
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
    LoginComponent.prototype.register = function () {
        if (this.data.username.indexOf('@') == -1 || this.data.username.indexOf('.') == -1) {
            this.errorMessage = 'Неправильный емайл';
            this.noEmailError = false;
            return;
        }
        if (this.data.password != this.passwordRecovery) {
            this.errorMessage = 'Пароль не cовпадает.';
            return;
        }
        if (this.webService.register(this.data)) {
            this.errorMessage = '';
            this.router.navigate(['/']);
        }
        else {
            this.errorMessage = 'Проблема с регистрацией';
        }
        /*
        if (this.data.userName == 'A' && this.data.password == 'A') {
            localStorage.setItem('pass', this.data.password);
            localStorage.setItem('name', this.data.userName);
            this.webService.isAuthenticated = true;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблема с регистрацией';
        }
        */
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
/*

        <button *ngIf="!newUser" class="login"> Вход </button>
        <button *ngIf="!newUser" class="unselected right" (click)="newUser=true;"> Регистрация </button>
        <button *ngIf="newUser" class="unselected" (click)="newUser=false;"> Вход </button>
        <button *ngIf="newUser" class="login right"> Регистрация </button>
        <br>

*/ 
//# sourceMappingURL=login.component.js.map