import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    template: ` 
    <h1 class="center"> Доска объявлений </h1>
    <button  class="main" (click)="addMessage()"> Дать объявление </button>    
    <button  class="main" routerLink="/users" (click)="webService.getUsersList()"> Список пользователей </button>     
    <button  class="main" routerLink="/show/SAVacationTable" (click)="webService.getApplyForVacationList()"> Замены на выходные </button>     
    <button  class="main" routerLink="/show/SHVacationTable" (click)="webService.getHireForVacationList()"> Нужна замена на выходные </button>         
    `
})
export class HomeComponent {

    constructor(private webService: WebService, private router: Router) {}

    addMessage() {
        if(this.webService.isAuthenticated)
            this.router.navigate(['/messages']);
        else this.router.navigate(['/request']);
    }
}