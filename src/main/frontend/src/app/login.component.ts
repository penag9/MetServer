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
        userName: '',
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
       

        if (this.data.userName == 'a@a.a' && this.data.password == '12345678') {
            if (this.rememberMe) {
                localStorage.setItem('username', 'a@a.a');

            }

            this.webService.isAuthenticated = true;
            this.webService.currentUser = this.data.userName;
            this.router.navigate(['/']);
        } else {


            this.webService.login(this.data)
                .subscribe(response => {
                    this.noRegisteredError = true;
                    this.webService.isAuthenticated = true;

                    this.webService.currentUser = this.data.userName;
                 //   this.webService.token = response.data.token;
                    this.router.navigate(['/']);
                }, error => {
                    if (error.status == 403) {
                        this.noRegisteredError = false;
                    }
                    console.log(false);
                });


/*
            
            if (this.webService.login(this.data)) {

                console.log(true);

                this.noRegisteredError = true;
                this.webService.isAuthenticated = true;
                this.webService.currentUser = this.data.userName;
                this.router.navigate(['/']);
            } else {
                console.log(false);
                this.noRegisteredError = false;
            }
           */ 
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
            this.webService.currentUser = this.data.userName;
            this.router.navigate(['/']);
        } else {
            // this.errorMessage = 'Проблема с регистрацией';
        }

    }

    resetData() {
        this.data.userName = '';
        this.data.password = '';

        this.noRegisteredError = true;
        this.noExistingError = true;
    }
}


