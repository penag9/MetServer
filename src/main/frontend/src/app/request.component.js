"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RequestComponent = (function () {
    function RequestComponent() {
    }
    return RequestComponent;
}());
RequestComponent = __decorate([
    core_1.Component({
        selector: 'request',
        template: "  \n        <br><br>\n        <button  class=\"main\" routerLink=\"/register\"> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F </button>    \n        <button  class=\"main\" routerLink=\"/login\"> \u041B\u043E\u0433\u0438\u043D </button>     \n  \n    "
    })
], RequestComponent);
exports.RequestComponent = RequestComponent;
//# sourceMappingURL=request.component.js.map