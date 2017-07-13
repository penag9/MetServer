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
var ShowHireVacationComponent = (function () {
    function ShowHireVacationComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.data = [{ lang: 'Русский', place: 'Яфо', begin: '2/3/2017', end: '  5/3/2017', name: 'Кто-то 1' },
            { lang: 'Русский', place: 'Яфо', begin: '3/4/2017', end: '  7/4/2017', name: 'Кто-то 2' },
            { lang: 'Русский', place: 'Яфо', begin: '4/5/2017', end: '  8/5/2017', name: 'Кто-то 3' },
            { lang: 'Русский', place: 'Яфо', begin: '5/6/2017', end: '  9/6/2017', name: 'Кто-то 4' },
        ];
        this.errorMessage = '';
    }
    return ShowHireVacationComponent;
}());
ShowHireVacationComponent = __decorate([
    core_1.Component({
        selector: 'show-hire-vacation',
        template: " \n    <h2 class=\"center\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </h2>\n    <div style=\"overflow-x:auto;\">\n        <table class=\"show\">\n            <tr>\n                <th class=\"show\"> \u042F\u0437\u044B\u043A\u0438 </th>\n                <th class=\"show\"> \u0413\u0434\u0435 </th>\n                <th class=\"show\"> \u041F\u043E \u043A\u0430\u043A\u043E\u0435 \u0447\u0438\u0441\u043B\u043E </th>\n                <th class=\"show\"> \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 </th>\n                <th class=\"show\"> \u0418\u043C\u044F </th>\n            </tr>\n            <tr class=\"show\" *ngFor=\"let user of data\">\n                <td class=\"show\">{{user.lang}}</td>\n                <td class=\"show\">{{user.place}}</td>\n                <td class=\"show\">{{user.end}}</td>\n                <td class=\"show\">{{user.begin}}</td>\n                <td class=\"show\">{{user.name}}</td>\n            </tr>\n        </table>\n\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], ShowHireVacationComponent);
exports.ShowHireVacationComponent = ShowHireVacationComponent;
//# sourceMappingURL=show-hire-vacation.component.js.map