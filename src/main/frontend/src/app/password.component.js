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
var PasswordComponent = (function () {
    function PasswordComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.oldPassword = '';
        this.newPassword = '';
        this.repeatNewPassword = '';
        this.noRepeatError = true;
    }
    PasswordComponent.prototype.update = function () {
        if (this.newPassword != this.repeatNewPassword) {
            this.noRepeatError = false;
            return;
        }
        this.router.navigate(['/profile']);
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: 'password',
        template: "  \n        <div class=\"container\">\n            <h3>\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F</h3>\n            <form #f=\"ngForm\" (ngSubmit)=\"update()\">\n                <p>\n                    <label class=\"tab2\"> \u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C : </label><br>\n                    <input type=\"password\" class=\"field tab2\" [(ngModel)]=\"oldPassword\" required name=\"oldPassword\" #oldpassword=\"ngModel\">\n                    <span [ngClass]=\"{'error': true, 'hiden': true }\">\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</span>\n                </p>\n                <p>\n                    <label class=\"tab2\"> \u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C : </label><br>\n                    <input type=\"password\" class=\"field tab2\" [(ngModel)]=\"newPassword\" required pattern=\"[!-~]{8,}\" name=\"newPassword\" #newpassword=\"ngModel\">\n                    <span [ngClass]=\"{'error': true, 'hiden': newpassword.valid || newpassword.pristine }\"> \u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432: \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B, \u0441\u0438\u043C\u0432\u043E\u043B\u044B  </span>\n                </p>\n                <p>\n                    <label class=\"tab2\"> \u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0435 \u0440\u0430\u0437 : </label><br>\n                    <input type=\"password\" class=\"field tab2\" [(ngModel)]=\"repeatNewPassword\" pattern=\"[!-~]{8,}\" required name=\"repeatNewPassword\" onclick=\"noRepeatError=true;\" #repeat=\"ngModel\">\n                    <span [ngClass]=\"{'error': true, 'hiden': noRepeatError  }\"> \u0412\u0442\u043E\u0440\u0438\u0447\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u043C\u0443  </span>\n\n                </p>\n                <br><br>\n                <button  routerLink=\"/profile\"> \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C </button>    \n                <button  type=\"submit\" class=\"right\" [disabled]=\"!f.valid\" > \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C </button>    \n            </form>     \n        </div>\n    ",
        styleUrls: ['./password.component.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=password.component.js.map