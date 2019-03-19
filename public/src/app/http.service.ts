import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getAllAuthors();
    this.getAuthor('0');
  }
  getAllAuthors(){
      return this._http.get('/api/authors');
  }
  getAuthor(id: String){
      return this._http.get(`/api/authors/${id}`);
  }
  createAuthor(newAuthor: any){
    return this._http.post(`/api/authors`, newAuthor)
  }
  deleteAuthor(id: String){
    return this._http.delete(`/api/authors/${id}`)
  }
  updateAuthor(id: string, authorUpdate: any){
    return this._http.put(`/api/authors/${id}`, authorUpdate)
  }
}
