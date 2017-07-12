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
            type: '2',
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
            freetext: ''
        };
        this.errorMessage = '';
    }
    AVComponent.prototype.placeRequest = function () {
        /*
         if(webService.placeRequest(data)) ;
            this.errorMessage = '';
            // show success message
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблемы с размещением объявления.';
        }*/
        console.log(this.data);
    };
    return AVComponent;
}());
AVComponent = __decorate([
    core_1.Component({
        selector: 'appling-vacation',
        template: " \n    <br><br><br>\n    <h1 class=\"center\"> \u0414\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </h1>\n    <br>\n    <h2 class=\"center\"> \u041C\u043E\u0433\u0443 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </h2>\n    <br>\n    <h1 style=\"color: red\" class=\"center\"> {{errorMessage}} </h1>\n    <form>\n        <label> \u0418\u043C\u044F : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.username\" name=\"username\">\n        <br><br>\n        <label> \u0422\u0435\u043B\u0435\u0444\u043E\u043D : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.phone\" name=\"phone\">\n        <br><br>\n        <label> \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 : </label>\n        <input class=\"tab\" type=\"date\" [(ngModel)]=\"data.begin\" name=\"begin\">\n        <br><br>\n         <label> \u041F\u043E \u043A\u0430\u043A\u043E\u0435 \u0447\u0438\u0441\u043B\u043E : </label>\n        <input class=\"tab\" type=\"date\" [(ngModel)]=\"data.end\" name=\"end\">\n        <br><br>\n        <label> \u0413\u0434\u0435 : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.place\" name=\"place\">\n        <br><br>\n        <label> \u042F\u0437\u044B\u043A\u0438 : </label>\n        <div class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.russian\" name=\"russian\"> \u0420\u0443\u0441\u0441\u043A\u0438\u0439  \n               <select [(ngModel)]=\"data.russianLevel\" name=\"russianLevel\">\n                  <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                  <option value=\"1\"> \u041F\u043B\u043E\u0445\u043E </option>\n                  <option value=\"2\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                  <option value=\"3\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                  <option value=\"4\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n              </select> \n        </div><br><br><br>\n        <div class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.hebrew\" name=\"hebrew\"> \u0418\u0432\u0440\u0438\u0442 \n                <select [(ngModel)]=\"data.hebrewLevel\" name=\"hebrewLevel\">\n                    <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                    <option value=\"1\"> \u041F\u043B\u043E\u0445\u043E </option>\n                    <option value=\"2\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                    <option value=\"3\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                    <option value=\"4\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n                </select> \n        </div><br><br>  \n        <div class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.romanian\" name=\"romanian\"> \u0420\u0443\u043C\u044B\u043D\u0441\u043A\u0438\u0439  \n                <select [(ngModel)]=\"data.romanianLevel\" name=\"romanianLevel\">\n                    <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                    <option value=\"1\"> \u041F\u043B\u043E\u0445\u043E </option>\n                    <option value=\"2\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                    <option value=\"3\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                    <option value=\"4\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n                </select> \n        </div><br><br>\n        <div class=\"tab\">\n            <input type=\"checkbox\" [(ngModel)]=\"data.english\" name=\"english\"> \u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \n                <select [(ngModel)]=\"data.englishLevel\" name=\"englishLevel\">\n                    <option value=\"0\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C </option>\n                    <option value=\"1\"> \u041F\u043B\u043E\u0445\u043E </option>\n                    <option value=\"2\"> \u0421 \u0442\u0440\u0443\u0434\u043E\u043C </option>\n                    <option value=\"3\"> \u0425\u043E\u0440\u043E\u0448\u043E </option>\n                    <option value=\"4\"> \u0420\u043E\u0434\u043D\u043E\u0439 </option>\n                </select> \n        </div><br>\n        <br><br>\n        <label> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F : </label><br>\n        <textarea rows=\"10\" cols=\"100\" [(ngModel)]=\"data.freetext\" name=\"freetext\"></textarea>\n        <br><br>\n        <button  (click)=\"placeRequest()\"> \u0413\u043E\u0442\u043E\u0432\u043E </button>  \n    </form>       \n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], AVComponent);
exports.AVComponent = AVComponent;
//# sourceMappingURL=apply-vacation.component.js.map