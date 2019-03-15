import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getPokemon();
    this.getInteresting();
  }
  getPokemon(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getInteresting(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log(`${data['name']}'s abilities are: ${data['abilities'][0]['ability']['name']} and ${data['abilities'][1]['ability']['name']}`));
      tempObservable.subscribe(data => console.log(`${data['abilities'][1]['ability']['name']}`));
      tempObservable.subscribe(data => this._http.get(`https://pokeapi.co/api/v2/ability/${data['abilities'][1]['ability']['name']}/?limit=20&offset=20`).subscribe(data => { console.log("Pokemon with the ability"); for (let i of data.pokemon) console.log(i.pokemon.name) }));
  }
}


