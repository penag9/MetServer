import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../web.service';

@Component({
    selector: 'show-hire-vacation-table',
    template: ` 
    <h2 class="center"> Требуется замена на время отпуска </h2>
    <div style="overflow-x:auto;">
        <table class="listOfMessages">
            <tr>
                <th class="listOfMessages"> Языки </th>
                <th class="listOfMessages"> Где </th>
                <th class="listOfMessages"> По какое число </th>
                <th class="listOfMessages"> С какого числа </th>
                <th class="listOfMessages"> Имя </th>
            </tr>
            <tr class="listOfMessages" *ngFor="let message of webService.currentTable; let i = index" (click)="showMessage(i)">
                <td class="listOfMessages">{{message.lang}}</td>
                <td class="listOfMessages">{{message.place}}</td>
                <td class="listOfMessages">{{message.end}}</td>
                <td class="listOfMessages">{{message.begin}}</td>
                <td class="listOfMessages">{{message.name}}</td>
            </tr>
        </table>

    </div>
    `,
    styleUrls: ['./show.css']
})
export class ShowHireVacationTableComponent {


    constructor(private webService: WebService, private router: Router) { }

    showMessage(index) {
        this.webService.currentMessageIndex = index;
        this.router.navigate(['/show/SHVacation']);
    }

}