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
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        this.webService.isAuthenticated = false;
        this.router.navigate(['/']);
    };
    NavComponent.prototype.help = function () {
        this.webService.getUsersList()
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: 'navigate',
        template: "\n    <div class=\"navigation\">\n        <img src=\"logo.png\">\n        <div class=\"mobileBar\">\n            <nav class=\"navbar navbar-default\">\n                <div class=\"container-fluid\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"navbar-header\">\n\n                <a class=\"navbar-brand\" href=\"#\"><img style=\"width: 50%;\" src=\"../logo.png\" alt=\"Dispute Bills\">\n                </a>\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                </div>\n            \n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav\">\n                        <li *ngIf=\"!webService.isAuthenticated\" routerLink=\"/login\" \n                                    (click)=\"$event.stopPropagation();\"><a >\u0412\u0445\u043E\u0434</a></li>\n                        <li *ngIf=\"!webService.isAuthenticated\"  routerLink=\"/login\" \n                                    (click)=\"$event.stopPropagation();\"><a >\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a></li>\n                        <li *ngIf=\"webService.isAuthenticated\" routerLink=\"/profile\" \n                                    (click)=\"$event.stopPropagation();\"><a >\u043C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C</a></li>\n                        <li class=\"dropdown\">\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" >\n                            <span class=\"caret\"></span> \u042F\u0437\u044B\u043A\u0438</a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a >\u05E2\u05D1</a></li>\n                                <li><a >\u0420\u0443\u0441</a></li>\n                                <li><a >Eng</a></li>\n                            </ul>\n                        </li>\n                        \n                        <li (click)=\"help(); $event.stopPropagation();\"><a >\u041F\u043E\u043C\u043E\u0449\u044C</a></li>    \n                        \n                        <li *ngIf=\"webService.isAuthenticated\" (click)=\"logout(); $event.stopPropagation();\"><a >\u0432\u044B\u0445\u043E\u0434</a></li> \n                    </ul>\n                    \n                </div><!-- /.navbar-collapse -->\n                </div><!-- /.container-fluid -->\n            </nav>\n        </div>\n        <div class=\"navBar\">\n                <button class=\"lang\" >\u05E2\u05D1</button>\n                <button class=\"lang\" >\u0420\u0443\u0441</button>\n                <button class=\"lang\" >Eng</button>\n                <div> \n                    <button *ngIf=\"!webService.isAuthenticated\" class=\"right\" routerLink=\"/login\" \n                                                                (click)=\"$event.stopPropagation();\">\u0432\u0445\u043E\u0434<br>\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</button> \n                    <button *ngIf=\"webService.isAuthenticated\" class=\"right\" routerLink=\"/profile\" \n                                                                (click)=\"$event.stopPropagation();\">\u043C\u043E\u0439<br>\u043F\u0440\u043E\u0444\u0438\u043B\u044C</button>            \n                    \n                    <button *ngIf=\"!webService.isAuthenticated\" id=\"help\" (click)=\"$event.stopPropagation();\">\u043F\u043E\u043C\u043E\u0449\u044C</button>   \n                    <div *ngIf=\"webService.isAuthenticated\" style=\"display: inline-table;\">\n                        <button class=\"small\" (click)=\"help(); $event.stopPropagation();\"> \u043F\u043E\u043C\u043E\u0449\u044C </button>   \n                        <br>\n                        <button class=\"small\" (click)=\"logout(); $event.stopPropagation();\" >\u0432\u044B\u0445\u043E\u0434</button>                \n                    <div>\n                </div>\n        </div>\n    </div>\n\n    ",
        styleUrls: ['./navigation.component.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=navigation.component.js.map