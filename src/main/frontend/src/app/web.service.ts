import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:63145/api';

  users = [{ name: 'A', text: 'A' }, { name: 'B', text: 'B' }];

  isAuthenticated = false;

  currentUser = '';

  constructor(private http: Http) { }

  postMessage(type, message) {
    return this.http.post(this.BASE_URL + type, message).toPromise();
  }

  getMessage(type) {
    return this.http.get(this.BASE_URL + '/messages').toPromise();
  }

  handleError(errorMessage) {
    console.log(errorMessage);
  }

  async register(data) {
    try {
      let response = await this.postMessage('register', data);

      /*
if OK put in local storage and return true, else return false
      */
    } catch (error) {
      this.handleError('Unable to get message');
    }
    return false;
  }

  async login(data) {
    try {
      let response = await this.postMessage('login', data);
      /*
if OK put in local storage and return true, else return false
      */
    } catch (error) {
      this.handleError('Unable to get message');
    }
    return false;
  }

  async getUsersList() {
    try {
      let response = await this.getMessage('users');
      this.users.push(response.json());
    } catch (error) {
      this.handleError('Unable to get message');
    }
  }
}