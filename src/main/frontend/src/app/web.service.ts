import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService{

  users = [{name : 'A', text: 'A'},{name : 'B', text: 'B'}];

  isAuthenticated = false;

  currentUser = '';

    constructor ( private http: Http) {}


}