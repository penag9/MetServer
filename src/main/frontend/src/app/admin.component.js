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
        this.getUsername = '';
        this.logged = false;
        this.showProfile = false;
        this.showBotsList = false;
        this.showChangePassword = false;
        this.errorMessage = '';
        this.users = [];
        if (sessionStorage.getItem('Atoken'))
            this.logged = true;
    }
    AdminComponent.prototype.login = function () {
        var _this = this;
        console.log('Admin Login ', this.data);
        this.webService.adminLogin(this.data)
            .subscribe(function (response) {
            var token = response.json().token;
            sessionStorage.setItem('Atoken', token);
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
    AdminComponent.prototype.getUser = function (username) {
        var _this = this;
        this.webService.getProfile(username)
            .subscribe(function (response) {
            _this.getUsername = response.json().username;
            _this.showBotsList = false;
            _this.showProfile = true;
            _this.errorMessage = '';
            console.log(response);
        }, function (error) {
            _this.errorMessage = error.json().message;
            console.log(error);
        });
    };
    AdminComponent.prototype.generate = function () {
        var _this = this;
        this.webService.generateUser()
            .subscribe(function (response) {
            _this.getUsername = response.json().username;
            _this.showProfile = true;
            _this.showBotsList = false;
            _this.errorMessage = '';
            console.log(response);
        }, function (error) {
            _this.errorMessage = 'Try later';
            console.log(error);
        });
    };
    AdminComponent.prototype.showAllBots = function () {
        var _this = this;
        this.webService.getBotsList()
            .subscribe(function (response) {
            _this.users = response.json();
            _this.showProfile = false;
            _this.showBotsList = true;
            _this.errorMessage = '';
            console.log(_this.users);
        }, function (error) {
            _this.errorMessage = 'Try later';
            console.log(error);
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin',
        template: "\n\n    <h1>{{errorMessage}}</h1>\n    <div class=tab2 *ngIf=\"!logged\">\n        for demo - admin admin\n        <br/>\n        <input type=\"text\" [(ngModel)]=\"data.username\" required name=\"username\" #username=\"ngModel\">\n        <input type=\"text\" [(ngModel)]=\"data.password\" required name=\"password\" #password=\"ngModel\">\n        <button type=\"submit\" (click)=\"login();\">Login</button>\n    </div>\n    <div class=tab2 *ngIf=\"logged\">\n\n\n    <input type=\"text\" [(ngModel)]=\"username\" >\n    <button (click)=\"getUser(username);\">Get user</button>\n    <br/>\n        <button (click)=\"generate();\">Generate new user</button>\n        <button (click)=\"showAllBots();\">Show all bots</button>\n        <br/>\n        <div *ngIf=\"showProfile\">\n            <profile [user]=\"getUsername\" (botUpdated)=\"showAllBots();\" (changePassword)=\"showChangePassword=true;\"></profile>\n        </div>\n        <div *ngIf=\"showChangePassword\">\n            <password [user]=\"getUsername\" (passwordUpdated)=\"showChangePassword=false;\"></password>\n        </div>\n        <div *ngIf=\"showBotsList\">\n           <table class=\"show\">\n                <tr>\n                    <th class=\"show\"> N </th>\n                    <th class=\"show\"> \u0418\u043C\u044F </th>\n                    <th class=\"show\"> \u041F\u043E\u0447\u0442\u0430 </th>\n                    <th class=\"show\"> \u041F\u0430\u0440\u043E\u043B\u044C </th>\n                </tr>\n                <tr class=\"show\" *ngFor=\"let bot of users;\" (click)=\"getUser(bot.username)\" >\n                    <td class=\"show\">{{bot.bot}}</td>\n                    <td class=\"show\">{{bot.name}}</td>\n                    <td class=\"show\">{{bot.username}}</td>\n                    <td class=\"show\">{{bot.password}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n    ",
        styleUrls: ['./admin.component.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map