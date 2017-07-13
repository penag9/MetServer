import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../web.service';

@Component({
    selector: 'show-apply-vacation',
    template: ` 
    <h2 class="center"> Они могут заменить на время отпуска </h2>
    <div style="overflow-x:auto;">
        <table class="show">
            <tr>
                <th class="show"> Языки </th>
                <th class="show"> Где </th>
                <th class="show"> По какое число </th>
                <th class="show"> С какого числа </th>
                <th class="show"> Имя </th>
            </tr>
            <tr class="show" *ngFor="let user of data">
                <td class="show">{{user.lang}}</td>
                <td class="show">{{user.place}}</td>
                <td class="show">{{user.end}}</td>
                <td class="show">{{user.begin}}</td>
                <td class="show">{{user.name}}</td>
            </tr>
        </table>

    </div>
    `
})
export class ShowApplyVacationComponent {

    data = [{lang: 'Русский', place: 'Яфо', begin: '2/3/2017', end: '  5/3/2017', name: 'Кто-то 1'},
            {lang: 'Русский', place: 'Яфо', begin: '3/4/2017', end: '  7/4/2017', name: 'Кто-то 2'},
            {lang: 'Русский', place: 'Яфо', begin: '4/5/2017', end: '  8/5/2017', name: 'Кто-то 3'},
            {lang: 'Русский', place: 'Яфо', begin: '5/6/2017', end: '  9/6/2017', name: 'Кто-то 4'},
    ];

    constructor(private webService: WebService, private router: Router) { }

}