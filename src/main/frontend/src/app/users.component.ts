import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'users',
    template: `
    <br>
    <h1 class="center"> Список пользователей </h1>
    <br>
    <div class="user" *ngFor="let user of webService.users">
            <h2>Имя - {{user.name}}</h2><br>
            Данные - {{user.text}} <br>
        <br><br>
    </div>
    `
})
export class UsersComponent {

    constructor(private webService: WebService) {}

    async ngOnInit() {
       // var response = await this.webService.getMessages();
       // this.messages = response.json();
    }

}
