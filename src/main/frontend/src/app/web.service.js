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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var WebService = (function () {
    function WebService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8080/';
        //BASE_URL = 'http://httpbin.org/post';
        this.isAuthenticated = false;
        this.currentUser = '';
        this.currentTable = [{
                id: 1, lang: 'Русский', place: 'Яфо', begin: '2/3/2017', end: '  5/3/2017', name: 'Кто-то 1',
                phone: '11111', russian: true, russianLevel: 3, hebrew: false, hebrewLevel: 0, romanian: false,
                romanianLevel: 0, english: false, englishLevel: 0, freetext: 'aaaaa'
            },
            {
                id: 2, lang: 'Русский, Иврит, Румынский, Английский', place: 'Яфо', begin: '3/4/2017', end: '  7/4/2017', name: 'Кто-то 2',
                phone: '22222', russian: true, russianLevel: 3, hebrew: true, hebrewLevel: 1, romanian: true,
                romanianLevel: 1, english: true, englishLevel: 2, freetext: 'ssssss'
            },
            {
                id: 3, lang: 'Русский, Иврит', place: 'Яфо', begin: '4/5/2017', end: '  8/5/2017', name: 'Кто-то 3',
                phone: '33333', russian: true, russianLevel: 3, hebrew: true, hebrewLevel: 3, romanian: false,
                romanianLevel: 0, english: false, englishLevel: 0, freetext: 'dddddd'
            },
            {
                id: 4, lang: 'Русский', place: 'Яфо', begin: '5/6/2017', end: '  9/6/2017', name: 'Кто-то 4',
                phone: '444444', russian: true, russianLevel: 3, hebrew: false, hebrewLevel: 0, romanian: false,
                romanianLevel: 0, english: false, englishLevel: 0, freetext: 'ffffff'
            },
        ];
        this.currentMessageIndex = 1;
        if (this.currentUser = localStorage.getItem('username')) {
            this.isAuthenticated = true;
            sessionStorage.setItem('token', localStorage.getItem('token'));
        }
    }
    WebService.prototype.postMessage = function (type, message) {
        var token = sessionStorage.getItem('token');
        var headers = token ?
            new http_1.Headers({ 'Content-Type': 'application/json', 'authorization': token })
            : new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.BASE_URL + type, message, options);
    };
    WebService.prototype.getMessage = function (type) {
        var token = sessionStorage.getItem('token');
        var headers = token ?
            new http_1.Headers({ 'Content-Type': 'application/json', 'authorization': token })
            : new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.BASE_URL + type, options);
    };
    WebService.prototype.register = function (data) {
        return this.postMessage('register', JSON.stringify(data));
    };
    WebService.prototype.login = function (data) {
        return this.postMessage('login', JSON.stringify(data));
    };
    WebService.prototype.getProfile = function () {
        return this.getMessage('users/' + this.currentUser);
    };
    WebService.prototype.updateProfile = function (data) {
        return this.postMessage('users/update/' + this.currentUser, JSON.stringify(data));
    };
    WebService.prototype.deleteProfile = function () {
        return this.getMessage('users/delete/' + this.currentUser);
    };
    WebService.prototype.getUsersList = function () {
        return this.getMessage('users');
    };
    WebService.prototype.adminLogin = function (data) {
        return this.postMessage('admin/login', JSON.stringify(data));
    };
    WebService.prototype.generateUser = function () {
        return this.getMessage("admin/generate");
    };
    WebService.prototype.getBotsList = function () {
        return this.getMessage('admin/bots');
    };
    WebService.prototype.placeRequest = function (data) {
        return this.postMessage('message', data);
    };
    WebService.prototype.getHireForVacationList = function () { };
    WebService.prototype.getApplyForVacationList = function () { };
    return WebService;
}());
WebService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WebService);
exports.WebService = WebService;
//# sourceMappingURL=web.service.js.map