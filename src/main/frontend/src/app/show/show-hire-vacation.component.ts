import { Component } from '@angular/core';

import { WebService } from '../web.service';

@Component({
    selector: 'show-hire-vacation',
    template: ` 
    <h2 class="center"> Требуется замена c {{webService.currentTable[webService.currentMessageIndex].begin}} по 
                                                {{webService.currentTable[webService.currentMessageIndex].end}}</h2>
    <h2 class="center"> в {{webService.currentTable[webService.currentMessageIndex].place}} </h2><br><br>  
    <label>Знание языков :</label>
    <div class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].russian">  Русский</div><br> 
    <div class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].hebrew">  Иврит  </div><br>  
    <div class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].romanian">  Румынский  </div><br>  
    <div class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].english">  Английский </div><br> 
    <label> Имя : </label>{{webService.currentTable[webService.currentMessageIndex].name}} <br><br>      
    <label> Телефон : </label>{{webService.currentTable[webService.currentMessageIndex].phone}} <br><br>      
    <label> Дополнительная информация : </label><br>
    <textarea rows="10" cols="100" readonly name="freetext">{{webService.currentTable[webService.currentMessageIndex].freetext}}</textarea>
    <br><br>
    <button type="button" onclick="history.back()">Обратно</button>
    `
})
export class ShowHireVacationComponent {


    constructor(private webService: WebService) { }

}