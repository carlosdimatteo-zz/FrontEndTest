import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserInfoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserInfoProvider Provider');
  }


  getUsers=()=>{
    return this.http.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
  }


  getUserInfo=()=>{
    return this.http.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
  }

}
