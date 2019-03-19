import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  newAuthor: Object;

  constructor(private _httpService: HttpService, public router: Router) {

  }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }

  createAuthor(){
    this._httpService.createAuthor(this.newAuthor).subscribe(data => {
      console.log("Got data from post back", data);
      this.newAuthor = {name: ""}
      this.router.navigate([''])
    })
  }

}
