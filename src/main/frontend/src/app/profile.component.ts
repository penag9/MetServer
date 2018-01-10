import { Component, Input, Output, EventEmitter,  OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges {

    @Input() 
    user = '';

    @Output()
    botUpdated = new EventEmitter();

    @Output() 
    changePassword = new EventEmitter();

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
     }


    ngOnChanges() {
        this.webService.getProfile(this.user)
            .subscribe(response => {
                console.log('ngOnChanges ', response.json());
                this.data = response.json();
            }, error => {
    
                console.log(error);
                
                if(this.user == '' ) this.router.navigate(['/login']);
            });
            
    }

    ngOnInit() {
        
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
        this.webService.getProfile(this.user)
            .subscribe(response => {
                console.log('ngOnInit ',response.json());
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

    updatePassword() {
        if(this.user == '' ) this.router.navigate(['/password']);
        else this.changePassword.emit(true);
    }
}


