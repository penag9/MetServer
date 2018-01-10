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
var ProfileComponent = (function () {
    function ProfileComponent(webService, router) {
        this.webService = webService;
        this.router = router;
        this.user = '';
        this.botUpdated = new core_1.EventEmitter();
        this.changePassword = new core_1.EventEmitter();
        this.selectedTab = 0;
        this.data = {
            username: '',
            name: '',
            phone: '',
            sex: '',
            russian: '',
            hebrew: '',
            english: '',
            romanian: '',
            french: ''
        };
    }
    ProfileComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.webService.getProfile(this.user)
            .subscribe(function (response) {
            console.log('ngOnChanges ', response.json());
            _this.data = response.json();
        }, function (error) {
            console.log(error);
            if (_this.user == '')
                _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var _this = this;
        this.webService.getProfile(this.user)
            .subscribe(function (response) {
            console.log('ngOnInit ', response.json());
            _this.data = response.json();
        }, function (error) {
            console.log(error);
            if (_this.user == '')
                _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.webService.updateProfile(this.data, this.user)
            .subscribe(function (response) {
            console.log(response);
            if (_this.user == '')
                _this.router.navigate(['/']);
            else
                _this.botUpdated.emit(true);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.delete = function () {
        var _this = this;
        this.webService.deleteProfile(this.user)
            .subscribe(function (response) {
            console.log(response);
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            _this.webService.isAuthenticated = false;
            if (_this.user == '')
                _this.router.navigate(['/']);
            else
                _this.botUpdated.emit(true);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.updatePassword = function () {
        if (this.user == '')
            this.router.navigate(['/password']);
        else
            this.changePassword.emit(true);
    };
    return ProfileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "botUpdated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "changePassword", void 0);
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map