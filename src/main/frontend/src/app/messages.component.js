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
        template: "\n    <img src=\"./app/images/APermanent.png\"  > \n    <img src=\"./app/images/AVacation.png\" routerLink=\"/request/AVacation\" > \n    <img src=\"./app/images/AHollyday.png\" > \n    <br>\n    <img src=\"./app/images/HPermanent.png\"  > \n    <img src=\"./app/images/HVacation.png\" routerLink=\"/request/HVacation\" > \n    <img src=\"./app/images/HHollyday.png\"  > \n    ",
        styleUrls: ['./messages.component.css']
    })
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
/*
<br><br><br>
        <table class="main">
            <tr>
                <td><button  class="main" routerLink="/request/APermanent"> Ищу постоянную работу </button></td>
                <td><button  class="main" routerLink="/request/AVacation"> Могу заменить на время отпуска </button></td>
                <td><button  class="main" routerLink="/request/AHollyday"> Могу заменить на выходные/ праздники </button></td>
            </tr>
            <tr>
                <td><button  class="main" routerLink="/request/HPermanent"> Требуется работник по уходу </button></td>
                <td><button  class="main" routerLink="/request/HVacation"> Требуется замена на время отпуска </button></td>
                <td><button  class="main" routerLink="/request/HHollyday"> Требуется замена на выходные/ праздники </button></td>
            </tr>
        </table>
*/ 
//# sourceMappingURL=messages.component.js.map