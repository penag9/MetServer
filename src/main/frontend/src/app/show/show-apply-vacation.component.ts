import { Component } from '@angular/core';

import { WebService } from '../web.service';

@Component({
    selector: 'show-apply-vacation',
    template: ` 
    
        <h2 class="center"> Могут заменить c {{webService.currentTable[webService.currentMessageIndex].begin}} по 
                                                {{webService.currentTable[webService.currentMessageIndex].end}} </h2>
        <h2 class="center"> в {{webService.currentTable[webService.currentMessageIndex].place}} </h2><br><br>  
    <div>
        <div style="float:left; width: 200px;">
        Photo <br> Placeholder <br><br><br><br><br><br><br><br>
        Имя : {{webService.currentTable[webService.currentMessageIndex].name}}
        </div>
        <div style="position:relative">
        <label>Знание языков :</label>
            <span class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].russian">        
                Русский  Уровень : {{webService.currentTable[webService.currentMessageIndex].russianLevel}}
            </span><br><br>  
            <span class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].hebrew">        
                Иврит  Уровень : {{webService.currentTable[webService.currentMessageIndex].hebrewLevel}}
            </span><br><br>  
            <span class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].romanian">        
                Румынский  Уровень : {{webService.currentTable[webService.currentMessageIndex].romanianLevel}}
            </span><br><br>  
            <span class="tab2" *ngIf="webService.currentTable[webService.currentMessageIndex].english">        
                Английский  Уровень : {{webService.currentTable[webService.currentMessageIndex].englishLevel}}
            </span><br><br>  
            Телефон : {{webService.currentTable[webService.currentMessageIndex].phone}}
        </div> 
    </div><br><br>
    <div>
    <label> Дополнительная информация : </label><br>
    <textarea rows="10" cols="100" readonly name="freetext">{{webService.currentTable[webService.currentMessageIndex].freetext}}</textarea>
    <br><br>
    <button type="button" onclick="history.back()">Обратно</button>
    `
})
export class ShowApplyVacationComponent {


    constructor(private webService: WebService) { }

}