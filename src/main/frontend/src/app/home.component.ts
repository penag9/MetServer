import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    template: ` 
    <div class="desktop">
        <h1 class="center"> Доска объявлений </h1>

        <div class="container">
            <div class="container2">
                <h3 class="center"> Семьям требуются: </h3>
                <div class="container3">    
                    <button  class="big" > Требуется работник по уходу </button>  
                    <button  class="big" > Требуется замена на время отпуска </button>  
                    <button  class="big" routerLink="/show/SHVacationTable" 
                            (click)="webService.getHireForVacationList()"> Требуется замена на выходные или праздники </button>  
                    <button class="add" (click)="addMessage()"> Дать объявление </button> 
                </div>
            </div>
        
            <div class="container2">
                <h3 class="center"> Работники по уходу: </h3>
                <div class="container3">
                    <button  class="big" > Ищу постоянную работу </button>  
                    <button  class="big" > Могу заменить на время отпуска </button>  
                    <button  class="big" routerLink="/show/SAVacationTable" 
                            (click)="webService.getApplyForVacationList()"> Могу заменить на выходные или праздники </button>
                    <button class="add" (click)="addMessage()"> Дать объявление </button>
                </div>
            
            </div>
        </div>
    </div>
    <div class="mobile">
        <img src="app/images/mobileHomeDemo.png" style="width: 100%; height: auto;" alt="mobile" >
    </div>
    `,
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private webService: WebService, private router: Router) {}

    addMessage() {
        if(this.webService.isAuthenticated)
            this.router.navigate(['/messages']);
        else this.router.navigate(['/request']);
    }
}
