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
var NavComponent = (function () {
    function NavComponent(webService, router) {
        this.webService = webService;
        this.router = router;
    }
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('username');
        this.webService.isAuthenticated = false;
        this.webService.currentUser = '';
        this.router.navigate(['/']);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: 'nav',
        template: "\n    <div class=\"navBar\" routerLink=\"/\">\n            <button class=\"lang\" >\u05E2\u05D1</button>\n            <button class=\"lang\" >\u0420\u0443\u0441</button>\n            <button class=\"lang\" >Eng</button>\n            <br> \n            <button *ngIf=\"!webService.isAuthenticated\" class=\"right\" routerLink=\"/login\" (click)=\"$event.stopPropagation();\"> \u0432\u0445\u043E\u0434 </button> \n            <button *ngIf=\"webService.isAuthenticated\" class=\"right\" (click)=\"logout();$event.stopPropagation();\" >Logout</button>\n            <button id=\"help\" (click)=\"$event.stopPropagation();\"> \u041F\u043E\u043C\u043E\u0449\u044C </button>   \n    </div>\n    ",
        styleUrls: ['./nav.component.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], NavComponent);
exports.NavComponent = NavComponent;
/*


            <img *ngIf="webService.isAuthenticated" class="right" src="./app/images/Profile.png" routerLink="/" >

            <img *ngIf="!webService.isAuthenticated" class="right" src="./app/images/Login.png" routerLink="/login" >

<button *ngIf="!webService.isAuthenticated"  class="right"  routerLink="/login">Логин</button>
<img *ngIf="!webService.isAuthenticated" class="right" src="./app/images/7-p1.png" routerLink="/login">
            <button *ngIf="webService.isAuthenticated"   class="right" routerLink="/" >Profile</button>
            <img *ngIf="!webService.isAuthenticated" class="right" src="./app/images/7-p1.png" routerLink="/" >
           
*/ 
//# sourceMappingURL=nav.component.js.map