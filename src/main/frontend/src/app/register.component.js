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
var RegisterComponent = (function () {
    function RegisterComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.data = {
            username: '',
            password: '',
            password2: '',
            email: '',
            phone: '',
            name: '',
            gender: '',
        };
        this.errorMessage = '';
    }
    RegisterComponent.prototype.register = function () {
        if (this.data.password != this.data.password2) {
            this.errorMessage = 'Пароль не потвержден.';
            return;
        }
        /*
         if(webService.login(data)) ;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблема с регистрацией';
        }*/
        console.log('login with ', this.data);
        if (this.data.username == 'A' && this.data.password == 'A') {
            localStorage.setItem('pass', this.data.password);
            localStorage.setItem('name', this.data.username);
            this.webService.isAuthenticated = true;
            this.errorMessage = '';
            this.router.navigate(['/']);
        }
        else {
            this.errorMessage = 'Проблема с регистрацией';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        template: " \n    <h1 class=\"center\"> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F </h1>\n    <h1 style=\"color: red\" class=\"center\"> {{errorMessage}} </h1>\n    <form>\n        <label> \u041B\u043E\u0433\u0438\u043D : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.username\" name=\"username\" required>\n        <br><br>\n        <label> \u041F\u0430\u0440\u043E\u043B\u044C : </label>\n        <input class=\"tab\" type=\"password\" [(ngModel)]=\"data.password\" name=\"password\" required>\n        <br><br>\n        <label> \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C : </label>\n        <input class=\"tab\" type=\"password\" [(ngModel)]=\"data.password2\" name=\"password2\" required>\n        <br><br>\n        <label> \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 : </label>\n        <input class=\"tab\" type=\"email\" [(ngModel)]=\"data.email\" name=\"email\">\n        <br><br>\n        <label> \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.phone\" name=\"phone\">\n        <br><br>\n        <label> \u0418\u043C\u044F : </label>\n        <input class=\"tab\" type=\"text\" [(ngModel)]=\"data.name\" name=\"name\">\n        <br><br>\n        <label> \u041F\u043E\u043B : </label>\n        <span class=\"tab\" >\n             <input type=\"radio\" [(ngModel)]=\"data.gender\" name=\"gender\" value=\"Male\"> \u041C\u0443\u0436\u0441\u043A\u043E\u0439  \n             <input type=\"radio\" [(ngModel)]=\"data.gender\" name=\"gender\"  value=\"Female\"> \u0416\u0435\u043D\u0441\u043A\u0438\u0439\n        </span>\n        <br><br>\n        <button  (click)=\"register()\"> \u0412\u043E\u0439\u0442\u0438 </button>  \n    </form>       \n    "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map