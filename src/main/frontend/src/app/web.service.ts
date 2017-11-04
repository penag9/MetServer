import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:8080/';


  users = [{ name: 'A', text: 'A' }, { name: 'B', text: 'B' }];

  isAuthenticated = false;

  currentUser = '';

  currentTable = [{
    id: 1, lang: 'Русский', place: 'Яфо', begin: '2/3/2017', end: '  5/3/2017', name: 'Кто-то 1',
    phone: '11111', russian: true, russianLevel: 3, hebrew: false, hebrewLevel: 0, romanian: false,
    romanianLevel: 0, english: false, englishLevel: 0, freetext: 'aaaaa'
  },
  {
    id: 2, lang: 'Русский, Иврит, Румынский, Английский', place: 'Яфо', begin: '3/4/2017', end: '  7/4/2017', name: 'Кто-то 2',
    phone: '22222', russian: true, russianLevel: 3, hebrew: true, hebrewLevel: 1, romanian: true,
    romanianLevel: 1, english: true, englishLevel: 2, freetext: 'ssssss'
  },
  {
    id: 3, lang: 'Русский, Иврит', place: 'Яфо', begin: '4/5/2017', end: '  8/5/2017', name: 'Кто-то 3',
    phone: '33333', russian: true, russianLevel: 3, hebrew: true, hebrewLevel: 3, romanian: false,
    romanianLevel: 0, english: false, englishLevel: 0, freetext: 'dddddd'
  },
  {
    id: 4, lang: 'Русский', place: 'Яфо', begin: '5/6/2017', end: '  9/6/2017', name: 'Кто-то 4',
    phone: '444444', russian: true, russianLevel: 3, hebrew: false, hebrewLevel: 0, romanian: false,
    romanianLevel: 0, english: false, englishLevel: 0, freetext: 'ffffff'
  },
  ];

  currentMessageIndex = 1;

  constructor(private http: Http) {
    if (this.currentUser = localStorage.getItem('username')) {
      this.isAuthenticated = true;
    }
  }

  postMessage(type, message) {

    let headers = localStorage.getItem('token') ?
                      new Headers({ 'Content-Type': 'application/json','Authorization': localStorage.getItem('token') }) 
                      :new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.BASE_URL + type, message, options);
  }

  getMessage(type) {
    let headers = localStorage.getItem('token') ?
                      new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }) 
                      :new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.BASE_URL + type, options);
  }


  register(data) {


    return this.postMessage('users', JSON.stringify(data));
    
  }

  login(data) {


    return this.postMessage('login', JSON.stringify(data));

  }

  getProfile() {
    return this.getMessage('users/' + this.currentUser);
  }

  deleteProfile() {

    return this.getMessage('users/' + this.currentUser + '/delete');
  }

  getUsersList() {

      return this.getMessage('users');
    
  }


  placeRequest(data) {

    
      return this.postMessage('message', data);

  }

  getHireForVacationList() { }

  getApplyForVacationList() { }

}
