import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './web.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
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
