import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    data = {
        username: '',
        password: ''
    };

    newUser = false;

    rememberMe = false;

    repeat = '';

    noRepeatError = true;
    noRegisteredError = true;
    noExistingError = true;

    constructor(private webService: WebService, private router: Router) { }

    login() {
       

        if (this.data.username == 'a@a.a' && this.data.password == '12345678') {
            if (this.rememberMe) {
                localStorage.setItem('username', 'a@a.a');

            }

            this.webService.isAuthenticated = true;
            this.webService.currentUser = this.data.username;
            this.router.navigate(['/']);
        } else {
            if (this.webService.login(this.data)) {

                this.webService.isAuthenticated = true;
                this.webService.currentUser = this.data.username;
                this.router.navigate(['/']);
            } else {
                this.noRegisteredError = true;
            }
        }
    }

    register() {
        /*
                if (this.data.username.indexOf('@') == -1 || this.data.username.indexOf('.') == -1) {
                    this.noEmailError = false;
                    return;
                }
        
        */
        if (this.data.password != this.repeat) {
            this.noRepeatError = false;
            return;
        }

        if (this.webService.register(this.data)) {

            this.webService.isAuthenticated = true;
            this.webService.currentUser = this.data.username;
            this.router.navigate(['/']);
        } else {
            // this.errorMessage = 'Проблема с регистрацией';
        }

    }

    resetData() {
        this.data.username = '';
        this.data.password = '';

        this.noRegisteredError = true;
        this.noExistingError = true;
    }
}


