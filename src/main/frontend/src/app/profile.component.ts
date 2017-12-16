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
        username: '',
        name: '',
        phone: '',
        sex: '',
        russian: '',
        hebrew: '',
        english: '',
        romanian: '',
        french: ''
    };

    constructor(private webService: WebService, private router: Router) { 
        this.webService.getProfile()
            .subscribe(response => {
                console.log(response.json());
                this.data = response.json();
                //this.data.username = result.username || '';
            }, error => {
    
                console.log(error);
                
                this.router.navigate(['/login']);
            });
    }

    update() {
        this.webService.updateProfile(this.data)
        .subscribe(response => {
            console.log(response);
        }, error => {

            console.log(error);
        });
    }

    delete() {

        this.webService.deleteProfile()
        .subscribe(response => {
            console.log(response);
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('token');
            this.webService.isAuthenticated = false;
            this.webService.currentUser = '';
            this.router.navigate(['/']);
        }, error => {

            console.log(error);
        });
    }
}


