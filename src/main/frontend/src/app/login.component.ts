import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'login',
    template: ` 
    <h1 class="center"> Вход/Регистрация (для демо - А А )</h1>
    <h1 style="color: red"> {{errorMessage}} </h1>
    
    <div id="container">
        <div id="login">
            <br>
            <button *ngIf="!newUser" class="login" > Вход </button>
            <button *ngIf="!newUser" class="unselected right" (click)="newUser=true;" > Регистрация </button>
            <button *ngIf="newUser" class="unselected" (click)="newUser=false;"> Вход </button>
            <button *ngIf="newUser" class="login right" > Регистрация </button>
            <br>
            <form *ngIf="!newUser" #f="ngForm" (ngSubmit)="login()">
                <div class="tab2">
                    <p>
                        <label> Адрес электронной почты : </label><br>
                        <input type="text" class="field" 
                            [(ngModel)]="data.username" required minlength="5"  name="username" >
                    </p>
                    <p>
                        <label> Пароль :</label><br>
                        <input type="password" class="field"  
                            [(ngModel)]="data.password" required  minlength="8" name="password">
                    </p>
                    <p> 
                        <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe"> Запомнить 
                        <br><br>
                    </p>
                </div>    
                <p>
                    <button type="submit" class="login" [disabled]="!f.valid">Войти</button>
                </p>
            </form>
            <form *ngIf="newUser" #f="ngForm" (ngSubmit)="register()">
                <div class="tab2">
                    <p>
                        <label> Адрес электронной почты : </label><br>
                        <input type="text" class="field"   
                            [(ngModel)]="data.username" required  minlength="5" name="username" >
                    </p>
                    <p>
                    <label> Пароль : </label><br>
                    <input type="password" class="field"   
                        [(ngModel)]="data.password" required   minlength="8" name="password">
                    </p>
                    <p>
                        <label> Потвердить пароль : </label><br>
                        <input type="password" class="field"   
                            [(ngModel)]="passwordRecovery" required   minlength="8" name="passwordRecovery">
                    </p>
                </div>   
                <p>
                    <button  type="button"  class="login" onclick="history.back()" > Отменить </button>
                    <button type="submit" class="login right" [disabled]="!f.valid"> Потвердить</button>                
                </p>
            </form>
        </div>
    </div>        
    `,
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