import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { InitialStylingValues } from '@angular/core/src/render3/interfaces/styling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  allAuthors: object = [];
  queriedAuthor: object = {};
  newCake: any;

  constructor(private _httpService: HttpService) {
    _httpService.getAllAuthors().subscribe(data => this.allAuthors = data)
  }

  ngOnInit(){
    this.newCake = {name: ""}
  }

  createAuthor(){
    let observable = this._httpService.createAuthor(this.newCake);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newCake = {baker: "", image: ""}
    })
  }

  deleteAuthor(id: String): void { 
    this._httpService.deleteAuthor(id).subscribe(data => console.log("data from delete:", data))
  }

  getAuthor(id: String): void { 
    this._httpService.getAuthor(id).subscribe(data => this.queriedAuthor = data)
  }

}
