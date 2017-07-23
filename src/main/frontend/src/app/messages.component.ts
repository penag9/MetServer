import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: `
                <h2 class="center"> Дать объявление </h2>
    <table class="show">  
        <tr>
            <td><button  class="main" routerLink="/request/APermanent"> Ищу постоянную работу </button></td>
            <td><button  class="main" routerLink="/request/AVacation"> Могу заменить на время отпуска </button></td>
            <td><button  class="main" routerLink="/request/AHollyday"> Могу заменить на выходные/праздники </button></td>
        </tr>
        <tr>
            <td><button  class="main" routerLink="/request/HPermanent"> Требуется работник по уходу </button></td>
            <td><button  class="main" routerLink="/request/HVacation"> Требуется замена на время отпуска </button></td>
            <td><button  class="main" routerLink="/request/HHollyday"> Требуется замена на выходные/праздники </button></td>
        </tr>
    </table> 
    `
})
export class MessagesComponent {}