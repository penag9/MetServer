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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        return this.http.post(this.BASE_URL + type, message).toPromise();
    };
    WebService.prototype.getMessage = function (type) {
        return this.http.get(this.BASE_URL + '/messages').toPromise();
    };
    WebService.prototype.handleError = function (errorMessage) {
        console.log(errorMessage);
    };
    WebService.prototype.register = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('send ', JSON.stringify(data));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.postMessage('users', JSON.stringify(data))];
                    case 2:
                        response = _a.sent();
                        console.log(response);
                        this.currentUser = data.username;
                        this.isAuthenticated = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.handleError('Unable to get message');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    WebService.prototype.login = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postMessage('login', JSON.stringify(data))];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError('Unable to get message');
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebService.prototype.getUsersList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getMessage('users')];
                    case 1:
                        response = _a.sent();
                        this.users.push(response.json());
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.handleError('Unable to get message');
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebService.prototype.placeRequest = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postMessage('message', data)];
                    case 1:
                        response = _a.sent();
                        if (response.json())
                            return [2 /*return*/, true];
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        this.handleError('Unable to get message');
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
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