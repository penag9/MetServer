import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'login',
    template: ` 
    <h1> Добро пожаловать (для демо - А А )</h1>
    <h1 style="color: red"> {{errorMessage}} </h1>
    <form>
        <label> Логин : </label>
        <input type="text" [(ngModel)]="data.username" name="username">
        <br><br>
        <label> Пароль : </label>
        <input type="password" [(ngModel)]="data.password" name="password">
        <br><br>
        <button  (click)="login()"> Войти </button>  
    </form>       
    `
})
export class LoginComponent {

    data = {
        username: '',
        password: ''
    };

    errorMessage = '';

    constructor(private webService: WebService, private router: Router) { }

    login() {

        /*
         if(webService.login(data)) ;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Неверный логин или пароль';
        }*/
        if (this.data.username == 'A' && this.data.password == 'A') {
            localStorage.setItem('pass', 'A');
            localStorage.setItem('name', 'A');
            this.webService.isAuthenticated = true;
            this.webService.currentUser = localStorage.getItem('name');
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Неверный логин или пароль';
        }
    }
}