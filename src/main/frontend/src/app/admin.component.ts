import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'admin',
    template: `
    <div class=tab2 *ngIf="!logged">
        for demo - admin admin
        <input type="text" [(ngModel)]="data.username" required name="username" #username="ngModel">
        <input type="text" [(ngModel)]="data.password" required name="password" #password="ngModel">
        <button type="submit" (click)="login();">Login</button>
        {{errorMessage}}
    </div>
    <div class=tab2 *ngIf="logged">
        <button (click)="generate();">Generate new user</button>
        <button (click)="showAllUsers();">Show all user</button>
        <br/>
        <textarea readonly> {{users}} </textarea>

    </div>

    `
})
export class AdminComponent {

    data = { 
        username: '',
        password: ''
    };

    logged = false;

    errorMessage = '';

    users = [];

    constructor(private webService: WebService, private router: Router) { }

    login() {
        console.log('Admin Login ', this.data);
        this.webService.adminLogin(this.data)
            .subscribe(response => {
                let token = response.json().token;
                sessionStorage.setItem('Atoken', token);
                sessionStorage.setItem('Auser', this.data.username);
                this.logged = true;
                this.errorMessage = '';
            }, error => {
                this.errorMessage = 'Wrong username or password';
                console.log(error);
            });

    }

    generate() {

        this.webService.generateUser()
            .subscribe(response => {

                console.log(response);
            }, error => {
                console.log(error);
            });

    }

    showAllBots() {
        this.webService.getBotsList()
            .subscribe(response => {
                this.users = response._body;
                console.log(response);
            }, error => {
                console.log(error);
            });

    }


}