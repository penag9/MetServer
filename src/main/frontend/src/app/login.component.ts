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
        console.log('Login ', this.data);
        this.webService.login(this.data)
            .subscribe(response => {
                //console.log(response, response.json());
                this.noRegisteredError = true;
                this.webService.isAuthenticated = true;

                this.webService.currentUser = this.data.username;

                let token = response.json().token;
                sessionStorage.setItem('token', token);

                if (this.rememberMe) {
                    localStorage.setItem('username', this.data.username);
                    localStorage.setItem('token', token);
                }

                this.router.navigate(['/']);
            }, error => {
                if (error.status == 401) {
                    this.noRegisteredError = false;
                }
                console.log(error);
            });

    }

    register() {

        console.log('Register ', this.data);

        if (this.data.password != this.repeat) {
            this.noRepeatError = false;
            return;
        }

        this.webService.register(this.data)
            .subscribe(response => {
               // console.log(response, response.json());
                this.noRegisteredError = true;
                this.webService.isAuthenticated = true;

                this.webService.currentUser = this.data.username;

                sessionStorage.setItem('username', this.data.username);
                sessionStorage.setItem('token', response.json().token);
                this.router.navigate(['/']);
            }, error => {

                console.log(error);
                if (error.status == 401) {
                    this.noExistingError = false;
                }
            });


    }

    resetData() {
        this.data.username = '';
        this.data.password = '';

        this.noRegisteredError = true;
        this.noExistingError = true;
        this.noRepeatError = true;
    }
}


