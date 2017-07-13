import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    template: ` 
    <h1  class="center"> Добро пожаловать {{webService.currentUser}}</h1>
    <button  class="main" routerLink="/messages"> Дать объявление </button>    
    <button  class="main" routerLink="/users" (click)="webService.getUsersList()"> Список пользователей </button>     
    <button  class="main" routerLink="/show/SAVacation" (click)="webService.getApplyForVacationList()"> Замены на выходные </button>     
    <button  class="main" routerLink="/show/SHVacation" (click)="webService.getHireForVacationList()"> Нужна замена на выходные </button>         
    `
})
export class HomeComponent {

    constructor(private webService: WebService) {}
}