
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'admin',
    template: `

    <h1>{{errorMessage}}</h1>
    <div class=tab2 *ngIf="!logged">
        for demo - admin admin
        <br/>
        <input type="text" [(ngModel)]="data.username" required name="username" #username="ngModel">
        <input type="text" [(ngModel)]="data.password" required name="password" #password="ngModel">
        <button type="submit" (click)="login();">Login</button>
    </div>
    <div class=tab2 *ngIf="logged">


    <input type="text" [(ngModel)]="username" >
    <button (click)="getUser(username);">Get user</button>
    <br/>
        <button (click)="generate();">Generate new user</button>
        <button (click)="showAllBots();">Show all bots</button>
        <br/>
        <div *ngIf="showProfile">
            <profile [user]="username"></profile>
        </div>
        <div *ngIf="showBotsList">
           <table class="show">
                <tr>
                    <th class="show"> N </th>
                    <th class="show"> Имя </th>
                    <th class="show"> Почта </th>
                    <th class="show"> Пароль </th>
                </tr>
                <tr class="show" *ngFor="let bot of users;" (click)="getUser(bot.username)" >
                    <td class="show">{{bot.bot}}</td>
                    <td class="show">{{bot.name}}</td>
                    <td class="show">{{bot.username}}</td>
                    <td class="show">{{bot.password}}</td>
                </tr>
            </table>
        </div>
    </div>
    `,
    styleUrls: ['./admin.component.css']
})
export class AdminComponent {

    data = { 
        username: '',
        password: ''
    };

    username = '';

    logged = false;
    showProfile = false;
    showBotsList = false;

    errorMessage = '';

    users = [];

    constructor(private webService: WebService, private router: Router) { 

        if(sessionStorage.getItem('Atoken')) this.logged = true;
    }

    login() {
        console.log('Admin Login ', this.data);
        this.webService.adminLogin(this.data)
            .subscribe(response => {
                let token = response.json().token;
                sessionStorage.setItem('Atoken', token);
                this.logged = true;
                this.errorMessage = '';
            }, error => {

                if (error.status == 401) {
                    this.errorMessage = 'Wrong username or password';
                } else {

                    this.errorMessage = 'Try later';
                }
                console.log(error);
            });

    }


    getUser( username) {

        this.webService.getProfile(username)
            .subscribe(response => {
                this.username = response.json().username;
                this.showProfile = true;
                this.showBotsList = false;
                this.errorMessage = '';
                console.log(response);
            }, error => {
                this.errorMessage = error.json().message;
                console.log(error);
            });
    }

    generate() {

        this.webService.generateUser()
            .subscribe(response => {
                this.username = response.json().username;
                this.showProfile = true;
                this.showBotsList = false;
                this.errorMessage = '';
                console.log(response);
            }, error => {
                this.errorMessage = 'Try later';
                console.log(error);
            });

    }

    showAllBots() {
        this.webService.getBotsList()
            .subscribe(response => {
               
                this.users =  response.json();
                this.showProfile = false;
                this.showBotsList = true;
                this.errorMessage = '';
                console.log(this.users);
            }, error => {
                this.errorMessage = 'Try later';
                console.log(error);
            });

    }


}