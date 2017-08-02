import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'nav',
    template: `
    <div class="navBar">
            <button class="lang" >Рус</button>
            <button class="lang" >Eng</button>
            <button class="lang"  >עב</button>
            <button *ngIf="!webService.isAuthenticated"  class="right" routerLink="/register">Регистрация</button>
            <button *ngIf="!webService.isAuthenticated"  class="right"  routerLink="/login">Логин</button>
            <button *ngIf="webService.isAuthenticated"   class="right" routerLink="/" >Profile</button>                                    
            <button *ngIf="webService.isAuthenticated"   class="right" (click)="logout()" >Logout</button> 
    </div>
    `,
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    constructor( private webService: WebService, private router: Router) {}

    logout() {
        localStorage.removeItem('username');
        this.webService.isAuthenticated = false;
        this.webService.currentUser = '';
        this.router.navigate(['/']);
    }

}