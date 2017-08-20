import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    template: ` 
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


/*

        <div> 
            <label> Семьям требуются: </label>
            <div>    
                <button  class="main" > Требуется работник по уходу </button>  
                <br>
                <button  class="main" > Требуется замена на время отпуска </button>  
                <br>
                <button  class="main" routerLink="/show/SHVacationTable" 
                        (click)="webService.getHireForVacationList()"> Требуется замена на выходные или праздники </button>  
                <br> 
                <button (click)="addMessage()"> Дать объявление </button> 
            </div>
        </div>


        <div> 
            <label> Работники по уходу: </label>
            <div>
                <button  class="main" > Ищу постоянную работу </button>  
                <br>
                <button  class="main" > Могу заменить на время отпуска </button>  
                <br>
                <button  class="main" routerLink="/show/SAVacationTable" 
                        (click)="webService.getApplyForVacationList()"> Могу заменить на выходные или праздники </button>
                <br>
                <button (click)="addMessage()"> Дать объявление </button>
            </div>
        </div>
*/





/*

    <button  class="main" (click)="addMessage()"> Дать объявление </button>    
    <button  class="main" routerLink="/users" (click)="webService.getUsersList()"> Список пользователей </button>     
    <button  class="main" routerLink="/show/SAVacationTable" (click)="webService.getApplyForVacationList()"> Замены на выходные </button>     
    <button  class="main" routerLink="/show/SHVacationTable" (click)="webService.getHireForVacationList()"> Нужна замена на выходные </button>         

*/