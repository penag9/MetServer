import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    template: ` 
    <br><br>
    <button  class="main" routerLink="/messages"> Дать объявление </button>    
    <button  class="main" routerLink="/users" (click)="webService.getUsersList()"> Список пользователей </button>     
    <button  class="main" routerLink="/show/SAVacationTable" (click)="webService.getApplyForVacationList()"> Замены на выходные </button>     
    <button  class="main" routerLink="/show/SHVacationTable" (click)="webService.getHireForVacationList()"> Нужна замена на выходные </button>         
    `
})
export class HomeComponent {

    constructor(private webService: WebService) {}
}