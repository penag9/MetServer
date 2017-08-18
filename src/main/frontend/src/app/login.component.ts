import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'login',
    template: ` 
    <h1 class="center"> Вход/Регистрация (для демо - А А )</h1>
    <h1 style="color: red"> {{errorMessage}} </h1>
    
    <div>
        <button (click)="newUser=false;"> Вход </button>
        <button (click)="newUser=true;"> Регистрация </button>
        <br>
        <form *ngIf="!newUser" #f="ngForm" (ngSubmit)="login()">
            <p>
                <label> Адрес электронной почты : </label><br>
                <input type="text"  
                    [(ngModel)]="data.username" required  name="username" >
            </p>
            <p>
                <label> Пароль :       Забыли пароль?</label><br>
                <input type="password"  
                    [(ngModel)]="data.password" required  name="password">
            </p>
            <p> 
                <br>
                <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe"> Запомнить 
                <br>
            </p>
            <p>
                <button type="submit" [disabled]="!f.valid">Войти</button>
            </p>
        </form>
        <form *ngIf="newUser" #f="ngForm" (ngSubmit)="register()">
            <p>
                <label> Адрес электронной почты : </label><br>
                <input type="text"  
                    [(ngModel)]="data.username" required  name="username" >
            </p>
            <p>
            <label> Пароль : </label><br>
            <input type="password"  
                [(ngModel)]="data.password" required  name="password">
            </p>
            <p>
                <label> Потвердить пароль : </label><br>
                <input type="password"  
                    [(ngModel)]="passwordRecovery" required  name="passwordRecovery">
            </p>
            <p>
                <button  type="button" onclick="history.back()"> Отменить </button>
                <button type="submit" [disabled]="!f.valid"> Потвердить</button>                
            </p>
        </form>
    </div>    
    `
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

    register() {
        
                if(this.data.password != this.passwordRecovery) {
                    this.errorMessage = 'Пароль не потвержден.';
                    return;
                }
                
                 if(this.webService.register(this.data)) {
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