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
var AdminComponent = (function () {
    function AdminComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.data = {
            username: '',
            password: ''
        };
        this.logged = true;
        this.errorMessage = '';
        this.users = [];
    }
    AdminComponent.prototype.login = function () {
        var _this = this;
        console.log('Admin Login ', this.data);
        this.webService.adminLogin(this.data)
            .subscribe(function (response) {
            var token = response.json().token;
            sessionStorage.setItem('Atoken', token);
            sessionStorage.setItem('Auser', _this.data.username);
            _this.logged = true;
            _this.errorMessage = '';
        }, function (error) {
            if (error.status == 401) {
                _this.errorMessage = 'Wrong username or password';
            }
            else {
                _this.errorMessage = 'Try later';
            }
            console.log(error);
        });
    };
    AdminComponent.prototype.generate = function () {
        this.webService.generateUser()
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.showAllBots = function () {
        var _this = this;
        this.webService.getBotsList()
            .subscribe(function (response) {
            _this.users = response.json();
            console.log(_this.users);
        }, function (error) {
            console.log(error);
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin',
        template: "\n    <div class=tab2 *ngIf=\"!logged\">\n        for demo - admin admin\n        <br/>\n        <input type=\"text\" [(ngModel)]=\"data.username\" required name=\"username\" #username=\"ngModel\">\n        <input type=\"text\" [(ngModel)]=\"data.password\" required name=\"password\" #password=\"ngModel\">\n        <button type=\"submit\" (click)=\"login();\">Login</button>\n        {{errorMessage}}\n    </div>\n    <div class=tab2 *ngIf=\"logged\">\n        <button (click)=\"generate();\">Generate new user</button>\n        <button (click)=\"showAllBots();\">Show all bots</button>\n        <br/>\n        <textarea readonly> {{users}} </textarea>\n    </div>\n\n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map