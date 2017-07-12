import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    template: ` 
    <h1  class="center"> Добро пожаловать {{webService.currentUser}}</h1>
    <button  class="main" routerLink="/messages"> Дать объявление </button>    
    <button  class="main" routerLink="/users" (click)="webServer.getUsersList()"> Список пользователей </button>         
    `
})
export class HomeComponent {

    constructor(private webService: WebService) {}
}