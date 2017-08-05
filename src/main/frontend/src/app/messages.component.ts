import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: `
    <img src="./app/images/APermanent.png"  > 
    <img src="./app/images/AVacation.png" routerLink="/request/AVacation" > 
    <img src="./app/images/AHollyday.png" > 
    <br>
    <img src="./app/images/HPermanent.png"  > 
    <img src="./app/images/HVacation.png" routerLink="/request/HVacation" > 
    <img src="./app/images/HHollyday.png"  > 
    `,
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {}

/*
<br><br><br>
        <table class="main">  
            <tr>
                <td><button  class="main" routerLink="/request/APermanent"> Ищу постоянную работу </button></td>
                <td><button  class="main" routerLink="/request/AVacation"> Могу заменить на время отпуска </button></td>
                <td><button  class="main" routerLink="/request/AHollyday"> Могу заменить на выходные/ праздники </button></td>
            </tr>
            <tr>
                <td><button  class="main" routerLink="/request/HPermanent"> Требуется работник по уходу </button></td>
                <td><button  class="main" routerLink="/request/HVacation"> Требуется замена на время отпуска </button></td>
                <td><button  class="main" routerLink="/request/HHollyday"> Требуется замена на выходные/ праздники </button></td>
            </tr>
        </table> 
*/