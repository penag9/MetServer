import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../web.service';

@Component({
    selector: 'show-hire-vacation-table',
    template: ` 
    <h2 class="center"> Требуется замена на время отпуска </h2>
    <div style="overflow-x:auto;">
        <table class="show">
            <tr>
                <th class="show"> Языки </th>
                <th class="show"> Где </th>
                <th class="show"> По какое число </th>
                <th class="show"> С какого числа </th>
                <th class="show"> Имя </th>
            </tr>
            <tr class="show" *ngFor="let message of webService.currentTable; let i = index" (click)="showMessage(i)">
                <td class="show">{{message.lang}}</td>
                <td class="show">{{message.place}}</td>
                <td class="show">{{message.end}}</td>
                <td class="show">{{message.begin}}</td>
                <td class="show">{{message.name}}</td>
            </tr>
        </table>

    </div>
    `
})
export class ShowHireVacationTableComponent {


    constructor(private webService: WebService, private router: Router) { }

    showMessage(index) {
        this.webService.currentMessageIndex = index;
        this.router.navigate(['/show/SHVacation']);
    }

}