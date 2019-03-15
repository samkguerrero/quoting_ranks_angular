import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    this.getTask();
    this.deleteTask();
  }
  getTasks(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.get('/api/tasks');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getTask(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.get('/api/tasks/5c89564e0469da6cc6da185c');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Got our task!", data));
  }
  deleteTask(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.delete('/api/tasks/5c89564e0469da6cc6da185c');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("deleted task!", data));
  }
}

