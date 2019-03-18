import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getAllCakes();
    this.getCake('0');
  }
  getAllCakes(){
      return this._http.get('/api/cakes');
  }
  getCake(id: String){
      return this._http.get(`/api/cakes/${id}`);
  }
  createCake(newTask: any){
    return this._http.post(`/api/cakes`, newTask)
  }
  deleteCake(id: String){
    return this._http.delete(`/api/cakes/${id}`)
  }
  addRating(id: String, newRating: any){
    return this._http.post(`/api/cakes/${id}`, newRating)
  }
}
