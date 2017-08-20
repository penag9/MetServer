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
        template: " \n    <h1 class=\"center\"> \u0414\u043E\u0441\u043A\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439 </h1>\n\n    <div class=\"container\">\n        <div class=\"container2\">\n            <h3 class=\"center\"> \u0421\u0435\u043C\u044C\u044F\u043C \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F: </h3>\n            <div class=\"container3\">    \n                <button  class=\"big\" > \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A \u043F\u043E \u0443\u0445\u043E\u0434\u0443 </button>  \n                <button  class=\"big\" > \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </button>  \n                <button  class=\"big\" routerLink=\"/show/SHVacationTable\" \n                        (click)=\"webService.getHireForVacationList()\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u0438\u043B\u0438 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 </button>  \n                <button class=\"add\" (click)=\"addMessage()\"> \u0414\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </button> \n            </div>\n        </div>\n    \n        <div class=\"container2\">\n            <h3 class=\"center\"> \u0420\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0438 \u043F\u043E \u0443\u0445\u043E\u0434\u0443: </h3>\n            <div class=\"container3\">\n                <button  class=\"big\" > \u0418\u0449\u0443 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 </button>  \n                <button  class=\"big\" > \u041C\u043E\u0433\u0443 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </button>  \n                <button  class=\"big\" routerLink=\"/show/SAVacationTable\" \n                         (click)=\"webService.getApplyForVacationList()\"> \u041C\u043E\u0433\u0443 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u0438\u043B\u0438 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 </button>\n                <button class=\"add\" (click)=\"addMessage()\"> \u0414\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </button>\n            </div>\n        \n        </div>\n    </div>\n    ",
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
/*

        <div>
            <label> Семьям требуются: </label>
            <div>
                <button  class="main" > Требуется работник по уходу </button>
                <br>
                <button  class="main" > Требуется замена на время отпуска </button>
                <br>
                <button  class="main" routerLink="/show/SHVacationTable"
                        (click)="webService.getHireForVacationList()"> Требуется замена на выходные или праздники </button>
                <br>
                <button (click)="addMessage()"> Дать объявление </button>
            </div>
        </div>


        <div>
            <label> Работники по уходу: </label>
            <div>
                <button  class="main" > Ищу постоянную работу </button>
                <br>
                <button  class="main" > Могу заменить на время отпуска </button>
                <br>
                <button  class="main" routerLink="/show/SAVacationTable"
                        (click)="webService.getApplyForVacationList()"> Могу заменить на выходные или праздники </button>
                <br>
                <button (click)="addMessage()"> Дать объявление </button>
            </div>
        </div>
*/
/*

    <button  class="main" (click)="addMessage()"> Дать объявление </button>
    <button  class="main" routerLink="/users" (click)="webService.getUsersList()"> Список пользователей </button>
    <button  class="main" routerLink="/show/SAVacationTable" (click)="webService.getApplyForVacationList()"> Замены на выходные </button>
    <button  class="main" routerLink="/show/SHVacationTable" (click)="webService.getHireForVacationList()"> Нужна замена на выходные </button>

*/ 
//# sourceMappingURL=home.component.js.map