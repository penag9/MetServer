import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';


@Component({
    selector: 'password',
    template: `  
        <div class="container">
            <h3>Смена пароля</h3>
            <form #f="ngForm" (ngSubmit)="update()">
                <p>
                    <label class="tab2"> Старый пароль : </label><br>
                    <input type="password" class="field tab2" [(ngModel)]="oldPassword" required name="oldPassword" #oldpassword="ngModel">
                    <span [ngClass]="{'error': true, 'hiden': true }">Вы ввели неправильные данные</span>
                </p>
                <p>
                    <label class="tab2"> Новый пароль : </label><br>
                    <input type="password" class="field tab2" [(ngModel)]="newPassword" required (focus)="errors.wrongNewPassword=false;" (blur)="checkPassword([newpassword])" name="newPassword" #newpassword="ngModel">
                    <span [ngClass]="{'error': true, 'hiden': !errors.wrongNewPassword }"> Минимум 8 символов: английские буквы, цифры, символы  </span>
                </p>
                <p>
                    <label class="tab2"> Новый пароль еще раз : </label><br>                   
                    <input type="password" class="field tab2" [(ngModel)]="repeatNewPassword" required (focus)="errors.wrongRepeat=false;" (blur)="checkRepeatPassword([repeat])" name="repeatNewPassword" #repeat="ngModel">
                    <span [ngClass]="{'error': true, 'hiden': !errors.wrongRepeat  }"> Вторично введенный пароль не соответствует изначальному  </span>

                </p>
                <br><br>
                <button  (click)="history.back();"> Отменить </button>    
                <button  type="submit" class="right" [disabled]="!f.valid" > Сохранить </button>    
            </form>     
        </div>
    `,
    styleUrls: ['./password.component.css']
})
export class PasswordComponent {

    @Input() 
    user = '';

    @Output()
    passwordUpdated = new EventEmitter();

    oldPassword = '';
    newPassword = '';
    repeatNewPassword = '';

    errors = {
        wrongOldPassword: false,
        wrongNewPassword: false,
        wrongRepeat: false
    };
    noRepeatError = true;
    
    constructor(private webService: WebService, private router: Router) { }

    update() {
        if(this.newPassword != this.repeatNewPassword) {
            this.noRepeatError = false;
            return;
        }

        this.webService.updateProfile({password: this.newPassword, oldPassword: this.oldPassword}, this.user)
        .subscribe(response => {
            console.log(response);

            if(this.user == '' ) history.back();
            else this.passwordUpdated.emit(true);
        }, error => {

            console.log(error);

            if(this.user == '' ) history.back();
            else this.passwordUpdated.emit(false);
        });
    }


    checkPassword(pass) {
        if(/[!-~]{8,}/.test(this.newPassword)) {
            this.errors.wrongNewPassword = false;
            pass.valid = false;
        } else  {
            this.errors.wrongNewPassword = true;
            pass.valid = true;
        }
    }

    checkRepeatPassword(rep) {
        if(this.newPassword != this.repeatNewPassword) {
            this.errors.wrongRepeat = true;
            rep.valid = false;
        } else {
            this.errors.wrongRepeat = false;
            rep.valid = true;
        }
    }
}