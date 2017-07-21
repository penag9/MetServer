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
var web_service_1 = require("../web.service");
var ShowHireVacationTableComponent = (function () {
    function ShowHireVacationTableComponent(webService, router) {
        this.webService = webService;
        this.router = router;
    }
    ShowHireVacationTableComponent.prototype.showMessage = function (index) {
        this.webService.currentMessageIndex = index;
        this.router.navigate(['/show/SHVacation']);
    };
    return ShowHireVacationTableComponent;
}());
ShowHireVacationTableComponent = __decorate([
    core_1.Component({
        selector: 'show-hire-vacation-table',
        template: " \n    <h2 class=\"center\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </h2>\n    <div style=\"overflow-x:auto;\">\n        <table class=\"show\">\n            <tr>\n                <th class=\"show\"> \u042F\u0437\u044B\u043A\u0438 </th>\n                <th class=\"show\"> \u0413\u0434\u0435 </th>\n                <th class=\"show\"> \u041F\u043E \u043A\u0430\u043A\u043E\u0435 \u0447\u0438\u0441\u043B\u043E </th>\n                <th class=\"show\"> \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 </th>\n                <th class=\"show\"> \u0418\u043C\u044F </th>\n            </tr>\n            <tr class=\"show\" *ngFor=\"let message of webService.currentTable; let i = index\" (click)=\"showMessage(i)\">\n                <td class=\"show\">{{message.lang}}</td>\n                <td class=\"show\">{{message.place}}</td>\n                <td class=\"show\">{{message.end}}</td>\n                <td class=\"show\">{{message.begin}}</td>\n                <td class=\"show\">{{message.name}}</td>\n            </tr>\n        </table>\n\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], ShowHireVacationTableComponent);
exports.ShowHireVacationTableComponent = ShowHireVacationTableComponent;
//# sourceMappingURL=show-hire-vacation-table.component.js.map