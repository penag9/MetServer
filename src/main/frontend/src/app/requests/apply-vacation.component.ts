import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../web.service';

@Component({
    selector: 'appling-vacation',
    template: ` 
    <br><br><br>
    <h1 class="center"> Дать объявление </h1>
    <br>
    <h2 class="center"> Могу заменить на время отпуска </h2>
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
            <input type="checkbox" [(ngModel)]="data.russian" name="russian" (click)="checkRussian()"> Русский  
               <select [(ngModel)]="data.russianLevel" name="russianLevel" (change)="levelRussian()">
                  <option value="0"> Уровень </option>
                  <option value="1" (click)="levelRussian()"> Плохо </option>
                  <option value="2" (click)="levelRussian()"> С трудом </option>
                  <option value="3" (click)="levelRussian()"> Хорошо </option>
                  <option value="4" (click)="levelRussian()"> Родной </option>
              </select> 
        </span><br><br>
        <span class="tab">
            <input type="checkbox" [(ngModel)]="data.hebrew" name="hebrew" (click)="checkHebrew()"> Иврит 
                <select [(ngModel)]="data.hebrewLevel" name="hebrewLevel" (change)="levelHebrew()">
                    <option value="0"> Уровень </option>
                    <option value="1"> Плохо </option>
                    <option value="2"> С трудом </option>
                    <option value="3"> Хорошо </option>
                    <option value="4"> Родной </option>
                </select> 
        </span><br><br>  
        <span class="tab">
            <input type="checkbox" [(ngModel)]="data.romanian" name="romanian" (click)="checkRomanian()"> Румынский  
                <select [(ngModel)]="data.romanianLevel" name="romanianLevel" (change)="levelRomanian()">
                    <option value="0"> Уровень </option>
                    <option value="1" (click)="levelRomanian()"> Плохо </option>
                    <option value="2" (click)="levelRomanian()"> С трудом </option>
                    <option value="3" (click)="levelRomanian()"> Хорошо </option>
                    <option value="4" (click)="levelRomanian()"> Родной </option>
                </select> 
        </span><br><br>
        <span class="tab">
            <input type="checkbox" [(ngModel)]="data.english" name="english" (click)="checkEnglish()"> Английский 
                <select [(ngModel)]="data.englishLevel" name="englishLevel" (change)="levelEnglish()">
                    <option value="0"> Уровень </option>
                    <option value="1" (click)="levelEnglish()"> Плохо </option>
                    <option value="2" (click)="levelEnglish()"> С трудом </option>
                    <option value="3" (click)="levelEnglish()"> Хорошо </option>
                    <option value="4" (click)="levelEnglish()"> Родной </option>
                </select> 
        </span><br>
        <br><br>
        <label> Дополнительная информация : </label><br>
        <textarea rows="10" cols="100" [(ngModel)]="data.freetext" name="freetext"></textarea>
        <br><br>
        <button  (click)="placeRequest()"> Готово </button>  
    </form>       
    `
})
export class AVComponent {

    data = {
        type: '2',
        username: '',
        phone: '',
        begin: '',
        end: '',
        place: '',
        russian: false,
        russianLevel: 0,
        hebrew: false,
        hebrewLevel: 0,
        romanian: false,
        romanianLevel: 0,
        english: false,
        englishLevel: 0,
        freetext: ''
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

    checkRussian() {
        if(this.data.russian) this.data.russianLevel = 0;
    }

    levelRussian() {
        if( this.data.russianLevel > 0 ) this.data.russian = true;
        else this.data.russian = false;
    }

    checkHebrew() {
        if(this.data.hebrew) this.data.hebrewLevel = 0;
    }

    levelHebrew() {
        if( this.data.hebrewLevel > 0 ) this.data.hebrew = true;
        else this.data.hebrew = false;
    }
    
    checkRomanian() {
        if(this.data.romanian) this.data.romanianLevel = 0;
    }

    levelRomanian() {
        if( this.data.romanianLevel > 0 ) this.data.romanian = true;
        else this.data.romanian = false;
    }
    
    checkEnglish() {
        if(this.data.english) this.data.englishLevel = 0;
    }

    levelEnglish() {
        if( this.data.englishLevel > 0 ) this.data.english = true;
        else this.data.english = false;
    }
}