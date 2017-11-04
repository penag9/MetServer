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
       console.log('Login ',this.data);

        if (this.data.username == 'a@a.a' && this.data.password == '12345678') {
            if (this.rememberMe) {
                localStorage.setItem('username', 'a@a.a');

            }

            this.webService.isAuthenticated = true;
            this.webService.currentUser = this.data.username;
            this.router.navigate(['/']);
        } else {


            this.webService.login(this.data)
                .subscribe(response => {
                    
            console.log(response, response.json());
                    this.noRegisteredError = true;
                    this.webService.isAuthenticated = true;

                    this.webService.currentUser = this.data.username;
                    if (this.rememberMe) {
                         localStorage.setItem('username', this.data.username);
                        //   this.webService.token = response.data.token;
                    }
                    this.router.navigate(['/']);
                }, error => {
                    if (error.status == 403) {
                        this.noRegisteredError = false;
                    }
                    console.log(error);
                });

        }
    }

    register() {

       console.log('Register ',this.data);

        if (this.data.password != this.repeat) {
            this.noRepeatError = false;
            return;
        }

        this.webService.register(this.data)
        .subscribe(response => {
            console.log(response, response.json());
            this.noRegisteredError = true;
            this.webService.isAuthenticated = true;

            this.webService.currentUser = this.data.username;

           // localStorage.setItem('username', this.data.username);
         //   this.webService.token = response.data.token;
            this.router.navigate(['/']);
        }, error => {

            console.log(error);
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


