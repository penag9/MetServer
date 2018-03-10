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
var AVComponent = (function () {
    function AVComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.data = {
            type: '22',
            username: '',
            phone: '',
            begin: '',
            end: '',
            place: '',
            russian: false,
            russianLevel: 0,
            hebrew: false,
            hebrewLevel: 0,
            romanian: false,
            romanianLevel: 0,
            english: false,
            englishLevel: 0,
            text: ''
        };
        this.errorMessage = '';
    }
    AVComponent.prototype.placeRequest = function () {
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
    AVComponent.prototype.checkDate = function (date) {
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
    AVComponent.prototype.checkDateOrder = function (begin, end) {
        if (+end.slice(0, 4) < +begin.slice(0, 4) || +end.slice(5, 7) < +begin.slice(5, 7) || +end.slice(8) < +begin.slice(8)) {
            return false;
        }
        else {
            return true;
        }
    };
    AVComponent.prototype.checkRussian = function () {
        if (this.data.russian)
            this.data.russianLevel = 0;
    };
    AVComponent.prototype.levelRussian = function () {
        if (this.data.russianLevel > 0)
            this.data.russian = true;
        else
            this.data.russian = false;
    };
    AVComponent.prototype.checkHebrew = function () {
        if (this.data.hebrew)
            this.data.hebrewLevel = 0;
    };
    AVComponent.prototype.levelHebrew = function () {
        if (this.data.hebrewLevel > 0)
            this.data.hebrew = true;
        else
            this.data.hebrew = false;
    };
    AVComponent.prototype.checkRomanian = function () {
        if (this.data.romanian)
            this.data.romanianLevel = 0;
    };
    AVComponent.prototype.levelRomanian = function () {
        if (this.data.romanianLevel > 0)
            this.data.romanian = true;
        else
            this.data.romanian = false;
    };
    AVComponent.prototype.checkEnglish = function () {
        if (this.data.english)
            this.data.englishLevel = 0;
    };
    AVComponent.prototype.levelEnglish = function () {
        if (this.data.englishLevel > 0)
            this.data.english = true;
        else
            this.data.english = false;
    };
    return AVComponent;
}());
AVComponent = __decorate([
    core_1.Component({
        selector: 'appling-vacation',
        template: " \n    <br><br><br>\n    <h1 class=\"center\"> \u0414\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </h1>\n    <br>\n    <h2 class=\"center\"> \u041C\u043E\u0433\u0443 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </h2>\n    <br>\n    <h1 style=\"color: red\" class=\"center\"> {{errorMessage}} </h1>\n    <form>\n        <label> \u0418\u043C\u044F : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.username\" name=\"username\">\n        <br><br>\n        <label> \u0422\u0435\u043B\u0435\u0444\u043E\u043D : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.phone\" name=\"phone\">\n        <br><br>\n        <label> \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 : </label>\n        <input class=\"tab\" type=\"date\" [(ngModel)]=\"data.begin\" name=\"begin\">\n        <br><br>\n         <label> \u041F\u043E \u043A\u0430\u043A\u043E\u0435 \u0447\u0438\u0441\u043B\u043E : </label>\n        <input class=\"tab\" type=\"date\" [(ngModel)]=\"data.end\" name=\"end\">\n        <br><br>\n        <label> \u0413\u0434\u0435 : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.place\" name=\"place\">\n        <br><br>\n        <label> \u042F\u0437\u044B\u043A\u0438 : </label>\n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.russian\" name=\"russian\" (click)=\"checkRussian()\"> \u0420\u0443\u0441\u0441\u043A\u0438\u0439  \n               <select [(ngModel)]=\"data.russianLevel\" name=\"russianLevel\" (change)=\"levelRussian()\">\n                  <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                  <option value=\"1\" (click)=\"levelRussian()\"> \u041F\u043B\u043E\u0445\u043E </option>\n                  <option value=\"2\" (click)=\"levelRussian()\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                  <option value=\"3\" (click)=\"levelRussian()\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                  <option value=\"4\" (click)=\"levelRussian()\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n              </select> \n        </span><br><br>\n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.hebrew\" name=\"hebrew\" (click)=\"checkHebrew()\"> \u0418\u0432\u0440\u0438\u0442 \n                <select [(ngModel)]=\"data.hebrewLevel\" name=\"hebrewLevel\" (change)=\"levelHebrew()\">\n                    <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                    <option value=\"1\"> \u041F\u043B\u043E\u0445\u043E </option>\n                    <option value=\"2\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                    <option value=\"3\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                    <option value=\"4\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n                </select> \n        </span><br><br>  \n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.romanian\" name=\"romanian\" (click)=\"checkRomanian()\"> \u0420\u0443\u043C\u044B\u043D\u0441\u043A\u0438\u0439  \n                <select [(ngModel)]=\"data.romanianLevel\" name=\"romanianLevel\" (change)=\"levelRomanian()\">\n                    <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                    <option value=\"1\" (click)=\"levelRomanian()\"> \u041F\u043B\u043E\u0445\u043E </option>\n                    <option value=\"2\" (click)=\"levelRomanian()\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                    <option value=\"3\" (click)=\"levelRomanian()\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                    <option value=\"4\" (click)=\"levelRomanian()\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n                </select> \n        </span><br><br>\n        <span class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.english\" name=\"english\" (click)=\"checkEnglish()\"> \u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \n                <select [(ngModel)]=\"data.englishLevel\" name=\"englishLevel\" (change)=\"levelEnglish()\">\n                    <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                    <option value=\"1\" (click)=\"levelEnglish()\"> \u041F\u043B\u043E\u0445\u043E </option>\n                    <option value=\"2\" (click)=\"levelEnglish()\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                    <option value=\"3\" (click)=\"levelEnglish()\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                    <option value=\"4\" (click)=\"levelEnglish()\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n                </select> \n        </span><br>\n        <br><br>\n        <label> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F : </label><br>\n        <textarea rows=\"10\" cols=\"100\" [(ngModel)]=\"data.text\" name=\"freetext\"></textarea>\n        <br><br>\n        <button  (click)=\"placeRequest()\"> \u0413\u043E\u0442\u043E\u0432\u043E </button>  \n        <button type=\"button\" onclick=\"history.back()\">\u041E\u0431\u0440\u0430\u0442\u043D\u043E</button>\n    </form>       \n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], AVComponent);
exports.AVComponent = AVComponent;
//# sourceMappingURL=apply-vacation.component.js.map