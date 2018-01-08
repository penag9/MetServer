import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    @Input() 
    user = '';

    @Output()
    botUpdated = new EventEmitter();

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

        this.webService.getProfile(this.user)
            .subscribe(response => {
                console.log('Constructor ',response.json());
                this.data = response.json();
            }, error => {
    
                console.log(error);
                
                if(this.user == '' )this.router.navigate(['/login']);
            });            
     }


    ngOnChanges() {

        this.webService.getProfile(this.user)
            .subscribe(response => {
                console.log('ngOnChanges ',response.json());
                this.data = response.json();
            }, error => {
    
                console.log(error);
                
                if(this.user == '' )this.router.navigate(['/login']);
            });
    }

    update() {
        this.webService.updateProfile(this.data, this.user)
        .subscribe(response => {
            console.log(response);
            if(this.user == '' )this.router.navigate(['/']);
            else this.botUpdated.emit(true);
        }, error => {

            console.log(error);
        });
    }

    delete() {

        this.webService.deleteProfile(this.user)
        .subscribe(response => {
            console.log(response);
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            this.webService.isAuthenticated = false;
            if(this.user == '' ) this.router.navigate(['/']);
            else this.botUpdated.emit(true);
        }, error => {

            console.log(error);
        });
    }
}


