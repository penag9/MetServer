import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    selectedTab = 0;


    data = {
        userName: '',
        name: '',
        phone: '',
        sex: '',
        russian: '',
        russhebrew: '',
        english: '',
        romanian: '',
        french: ''
    };

    constructor(private webService: WebService, private router: Router) { 
        this.webService.getProfile()
            .subscribe(response => {
                console.log(response);
            }, error => {
    
                console.log(error);
            });
    }

    update() {}

    delete() {

        this.webService.deleteProfile()
        .subscribe(response => {
            console.log(response);
            localStorage.removeItem('token');
            localStorage.removeItem('username');

            this.router.navigate(['/']);
        }, error => {

            console.log(error);
        });
    }
}


