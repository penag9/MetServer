import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'users',
    template: `
    <div *ngFor="let user of webService.users">
            <h2>{{user.name}}</h2><br>
            {{user.text}} <br>
            ------------ 
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
