import { Component } from '@angular/core';

@Component({
    selector: 'request',
    template: `  
        <br><br>
        <button  class="main" routerLink="/register"> Регистрация </button>    
        <button  class="main" routerLink="/login"> Логин </button>     
  
    `
})
export class RequestComponent {}