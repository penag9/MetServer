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
            <label> Username / Email / Phone : </label>
            <input type="text"  
                [(ngModel)]="data.username" required  name="username" >
        </p>
        <p>
            <label> Пароль : </label>
            <input type="password"  
                [(ngModel)]="data.password" required  name="password">
        </p>
        <p> 
            <a href="" class="tab"> Забыли пароль? </a> <br>
            <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe"> Запомнить <br>
        </p>
        <p>
            <button type="submit" [disabled]="!f.valid">Войти</button>
            <button  type="button" onclick="history.back()"> Обратно </button>
        </p>
    </form>
    `
})
export class LoginComponent {

    data = {
        username: '',
        password: ''
    };

    rememberMe = false;

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
            if(this.rememberMe) {
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
}