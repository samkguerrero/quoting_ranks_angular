import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { InitialStylingValues } from '@angular/core/src/render3/interfaces/styling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  allCakes: object = [];
  queriedCake: object = {};
  newCake: any;
  newRating: any;

  constructor(private _httpService: HttpService) {
    _httpService.getAllCakes().subscribe(data => this.allCakes = data)
  }

  ngOnInit(){
    this.newCake = {baker: "", image: ""}
    this.newRating = {rating: "", comment: ""}
  }

  getAllCakes(): void { 
    this._httpService.getAllCakes().subscribe(data => this.allCakes = data)
  }

  createCake(){
    let observable = this._httpService.createCake(this.newCake);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newCake = {baker: "", image: ""}
    })
  }

  addRating(cakeGettingRating: string): void{
    let observable = this._httpService.addRating(cakeGettingRating,this.newRating);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newRating = {rating: "", comment: ""}
    })
  }

  deleteCake(id: String): void { 
    this._httpService.deleteCake(id).subscribe(data => console.log("data from delete:", data))
  }

  getCake(id: String): void { 
    this._httpService.getCake(id).subscribe(data => this.queriedCake = data)
  }

}
