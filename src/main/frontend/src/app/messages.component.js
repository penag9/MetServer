"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    core_1.Component({
        selector: 'messages',
        template: "\n                <h2> \u0414\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </h2>\n    <table>  \n        <tr>\n            <td><button  class=\"main\" routerLink=\"/request/APermanent\"> \u0418\u0449\u0443 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 </button></td>\n            <td><button  class=\"main\" routerLink=\"/request/AVacation\"> \u041C\u043E\u0433\u0443 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </button></td>\n            <td><button  class=\"main\" routerLink=\"/request/AHollyday\"> \u041C\u043E\u0433\u0443 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435/\u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 </button></td>\n        </tr>\n        <tr>\n            <td><button  class=\"main\" routerLink=\"/request/HPermanent\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A \u043F\u043E \u0443\u0445\u043E\u0434\u0443 </button></td>\n            <td><button  class=\"main\" routerLink=\"/request/HVacation\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0443\u0441\u043A\u0430 </button></td>\n            <td><button  class=\"main\" routerLink=\"/request/HHollyday\"> \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435/\u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 </button></td>\n        </tr>\n    </table> \n    "
    })
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map