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

    passwordRecovery = '';

    errorMessage = '';

    noEmailError = true;
    noPasswordError = true;
    noRepeatError = true;

    constructor(private webService: WebService, private router: Router) { }

    login() {

        /*
         if(webService.login(data)) ;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Неверный логин или пароль';
        }*/

        if (this.data.username.indexOf('@') == -1 || this.data.username.indexOf('.') == -1  ) {
            this.errorMessage = 'Неправильный емайл';
            this.noEmailError = false;
            return;
        }

        if (this.data.username == 'A' && this.data.password == 'A') {
            if (this.rememberMe) {
                localStorage.setItem('username', 'A');

            }

            this.webService.isAuthenticated = true;
            this.webService.currentUser = this.data.username;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Неверный логин или пароль';
        }
    }

    register() {

        if (this.data.username.indexOf('@') == -1 || this.data.username.indexOf('.') == -1  ) {
            this.errorMessage = 'Неправильный емайл';
            this.noEmailError = false;
            return;
        }

        if (this.data.password != this.passwordRecovery) {
            this.errorMessage = 'Пароль не cовпадает.';
            return;
        }

        if (this.webService.register(this.data)) {
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблема с регистрацией';
        }
        /*
        if (this.data.userName == 'A' && this.data.password == 'A') {
            localStorage.setItem('pass', this.data.password);
            localStorage.setItem('name', this.data.userName);
            this.webService.isAuthenticated = true;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблема с регистрацией';
        }
        */
    }
}



/*

        <button *ngIf="!newUser" class="login"> Вход </button>
        <button *ngIf="!newUser" class="unselected right" (click)="newUser=true;"> Регистрация </button>
        <button *ngIf="newUser" class="unselected" (click)="newUser=false;"> Вход </button>
        <button *ngIf="newUser" class="login right"> Регистрация </button>
        <br>

*/