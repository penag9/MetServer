import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'nav',
    template: `
    <div class="navBar">
            <button class="lang" >עב</button>
            <button class="lang" >Рус</button>
            <button class="lang" >Eng</button>
            <br> 
            <button *ngIf="!webService.isAuthenticated" class="right" routerLink="/login" (click)="$event.stopPropagation();"> вход </button> 
            <button *ngIf="webService.isAuthenticated" class="right" (click)="logout();$event.stopPropagation();" >Logout</button>
            <button id="help" (click)="$event.stopPropagation();"> Помощь </button>   
    </div>
    `,
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    constructor(private webService: WebService, private router: Router) { }

    logout() {
        localStorage.removeItem('username');
        this.webService.isAuthenticated = false;
        this.webService.currentUser = '';
        this.router.navigate(['/']);
    }

}
/*


            <img *ngIf="webService.isAuthenticated" class="right" src="./app/images/Profile.png" routerLink="/" >       

            <img *ngIf="!webService.isAuthenticated" class="right" src="./app/images/Login.png" routerLink="/login" >

<button *ngIf="!webService.isAuthenticated"  class="right"  routerLink="/login">Логин</button>
<img *ngIf="!webService.isAuthenticated" class="right" src="./app/images/7-p1.png" routerLink="/login">
            <button *ngIf="webService.isAuthenticated"   class="right" routerLink="/" >Profile</button>           
            <img *ngIf="!webService.isAuthenticated" class="right" src="./app/images/7-p1.png" routerLink="/" >
           
*/