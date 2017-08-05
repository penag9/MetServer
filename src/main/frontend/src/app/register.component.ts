import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';


@Component({
    selector: 'register',
    template: ` 
    <h1 class="center"> Регистрация нового пользователя </h1>
    <h1 style="color: red" class="center"> {{errorMessage}} </h1>


    <form #f="ngForm" (ngSubmit)="register()">
        <p>
            <label> Логин : </label>
            <input class="tab" type="text"  
                [(ngModel)]="data.userName" required  name="username" >
        </p>
        <p>
            <label> Пароль : </label>
            <input class="tab" type="password"  
                [(ngModel)]="data.password" required  name="password">
        </p>
        <p>
            <label> Повторите пароль : </label>
            <input class="tab" type="password"  
                [(ngModel)]="data.passwordRecovery" required  name="passwordRecovery">
        </p>
        <p>
            <label> Электронная почта : </label>
            <input class="tab" type="email"  
                [(ngModel)]="data.email" required  name="email">
        </p>
        <p>
            <label> Номер телефона : </label>
            <input class="tab" type="text"  
                [(ngModel)]="data.phone" required  name="phone">
        </p>
        <p>
            <label> Имя : </label>
            <input class="tab" type="text"  
                [(ngModel)]="data.name" required  name="name">
        </p>
        <p>
            <label> Пол : </label>            
            <span class="tab">
                 <input type="radio" [(ngModel)]="data.sex" name="sex" value="m"  required> Мужской  
                <input type="radio" [(ngModel)]="data.sex" name="sex"  value="f"  required> Женский
            </span>
        </p>
        <p>
            <button type="submit" [disabled]="!f.valid"> Войти </button>
            <button  type="button" onclick="history.back()"> Обратно </button>
        </p>
    </form>

    `
})
export class RegisterComponent {

    data = {
        userName: '',
        password: '',
        passwordRecovery: '',
        email: '',
        phone: '',
        name: '',
        sex: '',
        lang: '',
        picture: ''
    };

    errorMessage = '';


    constructor(private webService: WebService, private router: Router) { }

    register() {

        if(this.data.password != this.data.passwordRecovery) {
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
