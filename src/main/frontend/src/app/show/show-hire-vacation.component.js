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
var web_service_1 = require("../web.service");
var ShowHireVacationComponent = (function () {
    function ShowHireVacationComponent(webService) {
        this.webService = webService;
    }
    return ShowHireVacationComponent;
}());
ShowHireVacationComponent = __decorate([
    core_1.Component({
        selector: 'show-hire-vacation',
        template: " \n    <h2 class=\"center\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 c {{webService.currentTable[webService.currentMessageIndex].begin}} \u043F\u043E \n                                                {{webService.currentTable[webService.currentMessageIndex].end}}</h2>\n    <h2 class=\"center\"> \u0432 {{webService.currentTable[webService.currentMessageIndex].place}} </h2><br><br>  \n    <label>\u0417\u043D\u0430\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u043E\u0432 :</label>\n    <div class=\"tab2\" *ngIf=\"webService.currentTable[webService.currentMessageIndex].russian\">  \u0420\u0443\u0441\u0441\u043A\u0438\u0439</div><br> \n    <div class=\"tab2\" *ngIf=\"webService.currentTable[webService.currentMessageIndex].hebrew\">  \u0418\u0432\u0440\u0438\u0442  </div><br>  \n    <div class=\"tab2\" *ngIf=\"webService.currentTable[webService.currentMessageIndex].romanian\">  \u0420\u0443\u043C\u044B\u043D\u0441\u043A\u0438\u0439  </div><br>  \n    <div class=\"tab2\" *ngIf=\"webService.currentTable[webService.currentMessageIndex].english\">  \u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 </div><br> \n    <label> \u0418\u043C\u044F : </label>{{webService.currentTable[webService.currentMessageIndex].name}} <br><br>      \n    <label> \u0422\u0435\u043B\u0435\u0444\u043E\u043D : </label>{{webService.currentTable[webService.currentMessageIndex].phone}} <br><br>      \n    <label> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F : </label><br>\n    <textarea rows=\"10\" cols=\"100\" readonly name=\"freetext\">{{webService.currentTable[webService.currentMessageIndex].freetext}}</textarea>\n    <br><br>\n    <button type=\"button\" onclick=\"history.back()\">\u041E\u0431\u0440\u0430\u0442\u043D\u043E</button>\n    ",
        styleUrls: ['./show.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService])
], ShowHireVacationComponent);
exports.ShowHireVacationComponent = ShowHireVacationComponent;
//# sourceMappingURL=show-hire-vacation.component.js.map