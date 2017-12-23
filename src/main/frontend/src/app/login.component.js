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
        this.repeat = '';
        this.noRepeatError = true;
        this.noRegisteredError = true;
        this.noExistingError = true;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('Login ', this.data);
        this.webService.login(this.data)
            .subscribe(function (response) {
            //console.log(response, response.json());
            _this.noRegisteredError = true;
            _this.webService.isAuthenticated = true;
            var token = response.json().token;
            sessionStorage.setItem('token', token);
            if (_this.rememberMe) {
                localStorage.setItem('token', token);
            }
            _this.router.navigate(['/']);
        }, function (error) {
            if (error.status == 401) {
                _this.noRegisteredError = false;
            }
            console.log(error);
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        console.log('Register ', this.data);
        if (this.data.password != this.repeat) {
            this.noRepeatError = false;
            return;
        }
        this.webService.register(this.data)
            .subscribe(function (response) {
            // console.log(response, response.json());
            _this.noRegisteredError = true;
            _this.webService.isAuthenticated = true;
            sessionStorage.setItem('token', response.json().token);
            _this.router.navigate(['/']);
        }, function (error) {
            console.log(error);
            if (error.status == 401) {
                _this.noExistingError = false;
            }
        });
    };
    LoginComponent.prototype.resetData = function () {
        this.data.username = '';
        this.data.password = '';
        this.noRegisteredError = true;
        this.noExistingError = true;
        this.noRepeatError = true;
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
//# sourceMappingURL=login.component.js.map