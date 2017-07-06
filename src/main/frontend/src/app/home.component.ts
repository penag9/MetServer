import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    template: ` 
    <h1> Добро пожаловать {{webService.currentUser}}</h1>
    <button  class="main" routerLink="/message"> Дать объявление </button>    
    <button  class="main" routerLink="/users"> Список пользователей </button>         
    `
})
export class HomeComponent {

    constructor(private webService: WebService) {}
}