import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'login',
    template: ` 
    <h1 class="center"> Добро пожаловать (для демо - А А )</h1>
    <h1 style="color: red"> {{errorMessage}} </h1>
    
    <form #f="ngForm" (ngSubmit)="login()">
        <p>
            <label> Логин : </label>
            <input type="text"  
                [(ngModel)]="data.username" required  name="username" >
        </p>
        <p>
            <label> Пароль : </label>
            <input type="password"  
                [(ngModel)]="data.password" required  name="password">
        </p>
        <p>
            <button type="submit" [disabled]="!f.valid">Войти</button>
        </p>
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
            localStorage.setItem('username', 'A');
            this.webService.isAuthenticated = true;
            this.webService.currentUser = localStorage.getItem('name');
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Неверный логин или пароль';
        }
    }
}