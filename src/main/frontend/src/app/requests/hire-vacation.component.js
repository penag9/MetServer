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
var HVComponent = (function () {
    function HVComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.data = {
            type: '1',
            username: '',
            phone: '',
            begin: '',
            end: '',
            place: '',
            russian: false,
            hebrew: false,
            romanian: false,
            english: false,
            freetext: ''
        };
        this.errorMessage = '';
    }
    HVComponent.prototype.placeRequest = function () {
        if (!this.checkDate(this.data.begin) || !this.checkDate(this.data.end)
            || !this.checkDateOrder(this.data.begin, this.data.end)) {
            this.errorMessage = 'Ошибка в дате.';
            return;
        }
        else {
        }
        /*
         if(webService.placeRequest(data)) ;
            this.errorMessage = '';
            // show success message
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблемы с размещением объявления.';
        }*/
    };
    HVComponent.prototype.checkDate = function (date) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (+date.slice(0, 4) < yyyy || +date.slice(5, 7) < mm || +date.slice(8) < dd) {
            return false;
        }
        else {
            return true;
        }
    };
    HVComponent.prototype.checkDateOrder = function (begin, end) {
        if (+end.slice(0, 4) < +begin.slice(0, 4) || +end.slice(5, 7) < +begin.slice(5, 7) || +end.slice(8) < +begin.slice(8)) {
            return false;
        }
        else {
            return true;
        }
    };
    return HVComponent;
}());
HVComponent = __decorate([
    core_1.Component({
        selector: 'hiring-vacation',
        template: " \n    <br><br><br>\n    <h1 class=\"center\"> \u0414\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </h1>\n    <br>\n    <h2 class=\"center\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </h2>\n    <br>\n    <h1 style=\"color: red\" class=\"center\"> {{errorMessage}} </h1>\n    <form>\n        <label> \u0418\u043C\u044F : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.username\" name=\"username\">\n        <br><br>\n        <label> \u0422\u0435\u043B\u0435\u0444\u043E\u043D : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.phone\" name=\"phone\">\n        <br><br>\n        <label> \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 : </label>\n        <input class=\"tab\" type=\"date\" [(ngModel)]=\"data.begin\" name=\"begin\">\n        <br><br>\n         <label> \u041F\u043E \u043A\u0430\u043A\u043E\u0435 \u0447\u0438\u0441\u043B\u043E : </label>\n        <input class=\"tab\" type=\"date\" [(ngModel)]=\"data.end\" name=\"end\">\n        <br><br>\n        <label> \u0413\u0434\u0435 : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.place\" name=\"place\">\n        <br><br>\n        <label> \u042F\u0437\u044B\u043A\u0438 : </label>\n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.russian\" name=\"russian\"> \u0420\u0443\u0441\u0441\u043A\u0438\u0439  \n        </span><br><br>  \n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.hebrew\" name=\"hebrew\"> \u0418\u0432\u0440\u0438\u0442 \n        </span><br><br>  \n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.romanian\" name=\"romanian\"> \u0420\u0443\u043C\u044B\u043D\u0441\u043A\u0438\u0439 \n        </span><br><br>  \n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.english\" name=\"english\"> \u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439\n        </span><br><br>\n        <label> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F : </label><br>\n        <textarea rows=\"10\" cols=\"100\" [(ngModel)]=\"data.freetext\" name=\"freetext\"></textarea>\n        <br><br>\n        <button  (click)=\"placeRequest()\"> \u0413\u043E\u0442\u043E\u0432\u043E </button> \n        <button type=\"button\" onclick=\"history.back()\">\u041E\u0431\u0440\u0430\u0442\u043D\u043E</button> \n    </form>       \n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], HVComponent);
exports.HVComponent = HVComponent;
//# sourceMappingURL=hire-vacation.component.js.map