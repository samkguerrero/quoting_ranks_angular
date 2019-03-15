import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    this.getTask();
  }
  getTasks(){
      return this._http.get('/api/tasks');
  }
  getTask(){
      return this._http.get('/api/tasks/5c896c7e227980b0441aef25');
  }
}


