import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../web.service';

@Component({
    selector: 'hiring-vacation',
    template: ` 
    <br><br><br>
    <h1 class="center"> Дать объявление </h1>
    <br>
    <h2 class="center"> Требуется замена на время отпуска </h2>
    <br>
    <h1 style="color: red" class="center"> {{errorMessage}} </h1>
    <form>
        <label> Имя : </label>
        <input class="tab" type="text" [(ngModel)]="data.username" name="username">
        <br><br>
        <label> Телефон : </label>
        <input class="tab" type="text" [(ngModel)]="data.phone" name="phone">
        <br><br>
        <label> С какого числа : </label>
        <input class="tab" type="date" [(ngModel)]="data.begin" name="begin">
        <br><br>
         <label> По какое число : </label>
        <input class="tab" type="date" [(ngModel)]="data.end" name="end">
        <br><br>
        <label> Где : </label>
        <input class="tab" type="text" [(ngModel)]="data.place" name="place">
        <br><br>
        <label> Языки : </label>
        <span class="tab">
            <input type="checkbox" [(ngModel)]="data.russian" name="russian"> Русский  
        </span><br><br>  
        <span class="tab">
            <input type="checkbox" [(ngModel)]="data.hebrew" name="hebrew"> Иврит 
        </span><br><br>  
        <span class="tab">
            <input type="checkbox" [(ngModel)]="data.romanian" name="romanian"> Румынский 
        </span><br><br>  
        <span class="tab">
            <input type="checkbox" [(ngModel)]="data.english" name="english"> Английский
        </span><br><br>
        <label> Дополнительная информация : </label><br>
        <textarea rows="10" cols="100" [(ngModel)]="data.text" name="freetext"></textarea>
        <br><br>
        <button  (click)="placeRequest()"> Готово </button> 
        <button type="button" onclick="history.back()">Обратно</button> 
    </form>       
    `
})
export class HVComponent {

    data = {
        type: '12',
        username: '',
        phone: '',
        begin: '',
        end: '',
        place: '',
        russian: false,
        hebrew: false,
        romanian: false,
        english: false,
        text: ''
    };

    errorMessage = '';

    constructor(private webService: WebService, private router: Router) { }

    placeRequest() {
        if (!this.checkDate(this.data.begin) || !this.checkDate(this.data.end)
            || !this.checkDateOrder(this.data.begin, this.data.end)) {
            this.errorMessage = 'Ошибка в дате.';
            return;
        } else {

        }

        
        /*
         if(webService.placeRequest(data)) ;
            this.errorMessage = '';
            // show success message
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблемы с размещением объявления.';
        }*/

    }

    checkDate(date) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if ( +date.slice(0, 4) < yyyy || +date.slice(5, 7) < mm || +date.slice(8) < dd) {
            return false;
        } else {
            return true;
        }
    }

    checkDateOrder(begin, end) {
        if (+end.slice(0, 4) < +begin.slice(0, 4) || +end.slice(5, 7) < +begin.slice(5, 7) || +end.slice(8) < +begin.slice(8)) {
            return false;
        } else {
            return true;
        }
    }
}