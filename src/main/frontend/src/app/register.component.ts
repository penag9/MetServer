import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';


@Component({
    selector: 'register',
    template: ` 
    <h1 class="center"> Регистрация нового пользователя </h1>
    <h1 style="color: red" class="center"> {{errorMessage}} </h1>
    <form>
        <label> Логин : </label>
        <input class="tab" type="text" [(ngModel)]="data.username" name="username" required>
        <br><br>
        <label> Пароль : </label>
        <input class="tab" type="password" [(ngModel)]="data.password" name="password" required>
        <br><br>
        <label> Повторите пароль : </label>
        <input class="tab" type="password" [(ngModel)]="data.password2" name="password2" required>
        <br><br>
        <label> Электронная почта : </label>
        <input class="tab" type="email" [(ngModel)]="data.email" name="email">
        <br><br>
        <label> Номер телефона : </label>
        <input class="tab" type="text" [(ngModel)]="data.phone" name="phone">
        <br><br>
        <label> Имя : </label>
        <input class="tab" type="text" [(ngModel)]="data.name" name="name">
        <br><br>
        <label> Пол : </label>
        <span class="tab" >
             <input type="radio" [(ngModel)]="data.gender" name="gender" value="Male"> Мужской  
             <input type="radio" [(ngModel)]="data.gender" name="gender"  value="Female"> Женский
        </span>
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

        if(this.data.password != this.data.password2) {
            this.errorMessage = 'Пароль не потвержден.';
            return;
        }
        /*
         if(webService.login(data)) ;
            this.errorMessage = '';
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблема с регистрацией';
        }*/
        console.log('login with ', this.data);
        if (this.data.username == 'A' && this.data.password == 'A') {
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