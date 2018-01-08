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

    errors = {
        wrongLogin: false,
        existingUser: false,
        wrongUsername: false,
        wrongPassword: false,
        wrongRepeat: false
    };


    constructor(private webService: WebService, private router: Router) { }

    login() {
        console.log('Login ', this.data);
        this.webService.login(this.data)
            .subscribe(response => {
                //console.log(response, response.json());
                this.errors.wrongLogin = false;
                this.webService.isAuthenticated = true;

                let token = response.json().token;
                sessionStorage.setItem('token', token);

                if (this.rememberMe) {
                    localStorage.setItem('token', token);
                }

                this.router.navigate(['/']);
            }, error => {
                if (error.status == 401) {
                    this.errors.wrongLogin = true;
                }
                console.log(error);
            });

    }

    register() {

        console.log('Register ', this.data);

        this.webService.register(this.data)
            .subscribe(response => {
               // console.log(response, response.json());
                this.errors.existingUser = false;
                this.webService.isAuthenticated = true;

                sessionStorage.setItem('token', response.json().token);
                this.router.navigate(['/']);
            }, error => {

                console.log(error);
                if (error.status == 401) {
                    this.errors.existingUser = true;
                }
            });


    }

    resetData() {
        this.data.username = '';
        this.data.password = '';

        for(var key in this.errors) {
            this.errors[key] = false;
        }
        this.errors.existingUser = false;
    }

    checkUsername(user) {

        if(/[!-~]{1,}@[!-~]{1,}\.[!-~]{1,}/.test(this.data.username)) {
            this.errors.wrongUsername = false;
            user.valid = true;
        } else  {
            this.errors.wrongUsername = true;
            user.valid = false;
        }
    }

    checkPassword(pass) {
        if(/[!-~]{8,}/.test(this.data.password)) {
            this.errors.wrongPassword = false;
            pass.valid = false;
        } else  {
            this.errors.wrongPassword = true;
            pass.valid = true;
        }
    }

    checkRepeatPassword(rep) {
        if(this.data.password != this.repeat) {
            this.errors.wrongRepeat = true;
            rep.valid = false;
        } else {
            this.errors.wrongRepeat = false;
            rep.valid = true;
        }
    }
}


