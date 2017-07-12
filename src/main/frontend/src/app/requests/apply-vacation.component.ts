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
        <div class="tab">
            <input type="checkbox" [(ngModel)]="data.russian" name="russian"> Русский  
               <select [(ngModel)]="data.russianLevel" name="russianLevel">
                  <option value="0"> Уровень </option>
                  <option value="1"> Плохо </option>
                  <option value="2"> С трудом </option>
                  <option value="3"> Хорошо </option>
                  <option value="4"> Родной </option>
              </select> 
        </div><br><br><br>
        <div class="tab">
            <input type="checkbox" [(ngModel)]="data.hebrew" name="hebrew"> Иврит 
                <select [(ngModel)]="data.hebrewLevel" name="hebrewLevel">
                    <option value="0"> Уровень </option>
                    <option value="1"> Плохо </option>
                    <option value="2"> С трудом </option>
                    <option value="3"> Хорошо </option>
                    <option value="4"> Родной </option>
                </select> 
        </div><br><br>  
        <div class="tab">
            <input type="checkbox" [(ngModel)]="data.romanian" name="romanian"> Румынский  
                <select [(ngModel)]="data.romanianLevel" name="romanianLevel">
                    <option value="0"> Уровень </option>
                    <option value="1"> Плохо </option>
                    <option value="2"> С трудом </option>
                    <option value="3"> Хорошо </option>
                    <option value="4"> Родной </option>
                </select> 
        </div><br><br>
        <div class="tab">
            <input type="checkbox" [(ngModel)]="data.english" name="english"> Английский 
                <select [(ngModel)]="data.englishLevel" name="englishLevel">
                    <option value="0"> Уровень </option>
                    <option value="1"> Плохо </option>
                    <option value="2"> С трудом </option>
                    <option value="3"> Хорошо </option>
                    <option value="4"> Родной </option>
                </select> 
        </div><br>
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

        /*
         if(webService.placeRequest(data)) ;
            this.errorMessage = '';
            // show success message
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Проблемы с размещением объявления.';
        }*/

        console.log(this.data);
    }
}