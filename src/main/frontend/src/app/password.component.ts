import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './web.service';


@Component({
    selector: 'password',
    template: `  
        <div class="container">
            <form #f="ngForm" (ngSubmit)="update()">
                <p>
                    <label class="tab2"> Старый пароль : </label><br>
                    <input type="password" class="field tab2" [(ngModel)]="oldPassword" required name="oldPassword" #oldpassword="ngModel">
                    <span [ngClass]="{'error': true, 'hiden': true }">Вы ввели неправильные данные</span>
                </p>
                <p>
                    <label class="tab2"> Новый пароль : </label><br>
                    <input type="password" class="field tab2" [(ngModel)]="newPassword" required pattern="[!-~]{8,}" name="newPassword" #newpassword="ngModel">
                    <span [ngClass]="{'error': true, 'hiden': newpassword.valid || newpassword.pristine }"> Минимум 8 символов: английские буквы, цифры, символы  </span>
                </p>
                <p>
                    <label class="tab2"> Новый пароль еще раз : </label><br>
                    <input type="password" class="field tab2" [(ngModel)]="repeatNewPassword" pattern="[!-~]{8,}" required name="repeatNewPassword" onclick="noRepeatError=true;" #repeat="ngModel">
                    <span [ngClass]="{'error': true, 'hiden': noRepeatError  }"> Вторично введенный пароль не соответствует изначальному  </span>

                </p>
                <br><br>
                <button  routerLink="/profile"> Отменить </button>    
                <button  type="submit" class="right" [disabled]="!f.valid" > Сохранить </button>    
            </form>     
        </div>
    `,
    styleUrls: ['./password.component.css']
})
export class PasswordComponent {


    oldPassword = '';
    newPassword = '';
    repeatNewPassword = '';

    noRepeatError = true;
    
    constructor(private webService: WebService, private router: Router) { }

    update() {
        console.log(this.newPassword , this.repeatNewPassword);
        if(this.newPassword != this.repeatNewPassword) {
            this.noRepeatError = false;
            return;
        }

        this.router.navigate(['/profile']);

    }
 }