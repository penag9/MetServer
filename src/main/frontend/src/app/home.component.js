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
var HomeComponent = (function () {
    function HomeComponent(webService, router) {
        this.webService = webService;
        this.router = router;
    }
    HomeComponent.prototype.addMessage = function () {
        if (this.webService.isAuthenticated)
            this.router.navigate(['/messages']);
        else
            this.router.navigate(['/request']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: " \n    <br><br>\n    <button  class=\"main\" (click)=\"addMessage()\"> \u0414\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </button>    \n    <button  class=\"main\" routerLink=\"/users\" (click)=\"webService.getUsersList()\"> \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 </button>     \n    <button  class=\"main\" routerLink=\"/show/SAVacationTable\" (click)=\"webService.getApplyForVacationList()\"> \u0417\u0430\u043C\u0435\u043D\u044B \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435 </button>     \n    <button  class=\"main\" routerLink=\"/show/SHVacationTable\" (click)=\"webService.getHireForVacationList()\"> \u041D\u0443\u0436\u043D\u0430 \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435 </button>         \n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map