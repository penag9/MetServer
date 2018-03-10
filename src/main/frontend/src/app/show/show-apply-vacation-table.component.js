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
var ShowApplyVacationTableComponent = (function () {
    function ShowApplyVacationTableComponent(webService, router) {
        this.webService = webService;
        this.router = router;
    }
    ShowApplyVacationTableComponent.prototype.showMessage = function (index) {
        this.webService.currentMessageIndex = index;
        this.router.navigate(['/show/SAVacation']);
    };
    return ShowApplyVacationTableComponent;
}());
ShowApplyVacationTableComponent = __decorate([
    core_1.Component({
        selector: 'show-apply-vacation-table',
        template: " \n    <h2 class=\"center\"> \u041E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </h2>\n    <div style=\"overflow-x:auto;\">\n        <table class=\"listOfMessages\">\n            <tr>\n                <th class=\"listOfMessages\"> \u042F\u0437\u044B\u043A\u0438 </th>\n                <th class=\"listOfMessages\"> \u0413\u0434\u0435 </th>\n                <th class=\"listOfMessages\"> \u041F\u043E \u043A\u0430\u043A\u043E\u0435 \u0447\u0438\u0441\u043B\u043E </th>\n                <th class=\"listOfMessages\"> \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 </th>\n                <th class=\"listOfMessages\"> \u0418\u043C\u044F </th>\n            </tr>\n            <tr class=\"listOfMessages\" *ngFor=\"let message of webService.currentTable; let i = index\" (click)=\"showMessage(i)\">\n                <td class=\"listOfMessages\">{{message.lang}}</td>\n                <td class=\"listOfMessages\">{{message.place}}</td>\n                <td class=\"listOfMessages\">{{message.end}}</td>\n                <td class=\"listOfMessages\">{{message.begin}}</td>\n                <td class=\"listOfMessages\">{{message.name}}</td>\n            </tr>\n        </table>\n\n    </div>\n    ",
        styleUrls: ['./show.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], ShowApplyVacationTableComponent);
exports.ShowApplyVacationTableComponent = ShowApplyVacationTableComponent;
//# sourceMappingURL=show-apply-vacation-table.component.js.map