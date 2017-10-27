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
        this.users = [{ name: 'A', text: 'A' }, { name: 'B', text: 'B' }];
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
        }
    }
    WebService.prototype.postMessage = function (type, message) {
        var headers = localStorage.getItem('token') ?
            new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') })
            : new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.BASE_URL + type, message, options);
    };
    WebService.prototype.getMessage = function (type) {
        var headers = localStorage.getItem('token') ?
            new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') })
            : new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.BASE_URL + type, options);
    };
    WebService.prototype.handleError = function (errorMessage) {
        console.log(errorMessage);
    };
    WebService.prototype.register = function (data) {
        return this.postMessage('users', JSON.stringify(data));
        /*
        console.log('register ', JSON.stringify(data));
        try {
          let response = await this.postMessage('users', JSON.stringify(data));
    
          console.log(response);
    
          this.currentUser = data.username;
          this.isAuthenticated = true;
        } catch (error) {
    
          console.log(error);
          this.handleError('Unable to get message');
    
          return false;
        }
        */
    };
    WebService.prototype.login = function (data) {
        return this.postMessage('login', JSON.stringify(data));
        /*
        console.log('login  ', JSON.stringify(data));
        try {
          let response = await this.postMessage('login', JSON.stringify(data));
          console.log('resp ',response);
        } catch (error) {
          console.log('error ',error);
          if(error.status == 403) {
           // this.webErrors.unauthorized = true;
          }
          this.handleError('Unable to get message');
          return false;
        }
         */
    };
    WebService.prototype.getUsersList = function () {
        return this.getMessage('users');
        /*
        try {
          let response = await this.getMessage('users');
          this.users.push(response.json());
        } catch (error) {
          this.handleError('Unable to get message');
          return false;
        }
        */
    };
    WebService.prototype.placeRequest = function (data) {
        return this.postMessage('message', data);
        /*
        try {
          let response = await this.postMessage('message', data);
          if (response.json()) return true;
        } catch (error) {
          this.handleError('Unable to get message');
          return false;
        }
            */
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