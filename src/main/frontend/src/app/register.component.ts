import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';


@Component({
    selector: 'register',
    template: ` 
    <h1> Регистрация нового пользователя </h1>
    <h1 style="color: red"> {{errorMessage}} </h1>
    <form>
        <label> Логин : </label>
        <input type="text" [(ngModel)]="data.username" name="username" required>
        <br><br>
        <label> Пароль : </label>
        <input type="password" [(ngModel)]="data.password" name="password" required>
        <br><br>
        <label> Повторите пароль : </label>
        <input type="password" [(ngModel)]="data.password2" name="password2" required>
        <br><br>
        <label> Электронная почта : </label>
        <input type="email" [(ngModel)]="data.email" name="email">
        <br><br>
        <label> Номер телефона : </label>
        <input type="text" [(ngModel)]="data.phone" name="phone">
        <br><br>
        <label> Имя : </label>
        <input type="text" [(ngModel)]="data.name" name="name">
        <br><br>
        <label> Пол : </label>
        <input type="radio" [(ngModel)]="data.gender" name="gender" value="Male"> Мужской  
        <input type="radio" [(ngModel)]="data.gender" name="gender"  value="Female"> Женский
        <br><br>
        <button  (click)="register()"> Войти </button>  
    </form>       
    `
})
export class RegisterComponent {

    data = {
        username: '',
        password: '',
        password2: '',
        email: '',
        phone: '',
        name: '',
        gender: '',
    };

    errorMessage = '';


    constructor(private webService: WebService, private router: Router) { }

    register() {


        /*
         if(webService.login(data)) ;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблема с регистрацией';
        }*/
        console.log('login with ', this.data);
        if (this.data.username == 'a' && this.data.password == 'a') {
            localStorage.setItem('pass', this.data.password);
            localStorage.setItem('name', this.data.username);
            this.webService.isAuthenticated = true;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблема с регистрацией';
        }
    }
}