import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: `
                <h2> Дать объявление </h2>
    <table>  
        <tr>
            <td><button  class="main" routerLink="/request"> Ищу постоянную работу </button></td>
            <td><button  class="main" routerLink="/request"> Могу заменить на время отпуска </button></td>
            <td><button  class="main" routerLink="/request"> Могу заменить на выходные/праздники </button></td>
        </tr>
        <tr>
            <td><button  class="main" routerLink="/request"> Требуется работник по уходу </button></td>
            <td><button  class="main" routerLink="/request"> Требуется замена на время отпуска </button></td>
            <td><button  class="main" routerLink="/request"> Требуется замена на выходные/праздники </button></td>
        </tr>
    </table> 
    `
})
export class MessagesComponent {}