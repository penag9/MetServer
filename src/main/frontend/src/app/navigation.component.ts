import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'navigate',
        template: `
    <div class="navigation">
        <img src="logo.png">
        <div class="mobileBar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">

                <a class="navbar-brand" href="#"><img style="width: 50%;" src="../logo.png" alt="Dispute Bills">
                </a>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
            
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li *ngIf="!webService.isAuthenticated" routerLink="/login" 
                                    (click)="$event.stopPropagation();"><a >Вход</a></li>
                        <li *ngIf="!webService.isAuthenticated"  routerLink="/login" 
                                    (click)="$event.stopPropagation();"><a >Регистрация</a></li>
                        <li *ngIf="webService.isAuthenticated" routerLink="/profile" 
                                    (click)="$event.stopPropagation();"><a >мой профиль</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" >
                            <span class="caret"></span> Языки</a>
                            <ul class="dropdown-menu">
                                <li><a >עב</a></li>
                                <li><a >Рус</a></li>
                                <li><a >Eng</a></li>
                            </ul>
                        </li>
                        
                        <li (click)="help(); $event.stopPropagation();"><a >Помощь</a></li>    
                        
                        <li *ngIf="webService.isAuthenticated" (click)="logout(); $event.stopPropagation();"><a >выход</a></li> 
                    </ul>
                    
                </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
        </div>
        <div class="navBar">
                <button class="lang" >עב</button>
                <button class="lang" >Рус</button>
                <button class="lang" >Eng</button>
                <div> 
                    <button *ngIf="!webService.isAuthenticated" class="right" routerLink="/login" 
                                                                (click)="$event.stopPropagation();">вход<br>регистрация</button> 
                    <button *ngIf="webService.isAuthenticated" class="right" routerLink="/profile" 
                                                                (click)="$event.stopPropagation();">мой<br>профиль</button>            
                    
                    <button *ngIf="!webService.isAuthenticated" id="help" (click)="$event.stopPropagation();">помощь</button>   
                    <div *ngIf="webService.isAuthenticated" style="display: inline-table;">
                        <button class="small" (click)="help(); $event.stopPropagation();"> помощь </button>   
                        <br>
                        <button class="small" (click)="logout(); $event.stopPropagation();" >выход</button>                
                    <div>
                </div>
        </div>
    </div>

    `,
    styleUrls: ['./navigation.component.css']
})
export class NavComponent {

    constructor(private webService: WebService, private router: Router) { }

    logout() {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        this.webService.isAuthenticated = false;
        this.router.navigate(['/']);
    }

    help(){
        this.webService.getUsersList()
        .subscribe(response => {
            console.log(response);
        }, error => {

            console.log(error);
        });
    }

}