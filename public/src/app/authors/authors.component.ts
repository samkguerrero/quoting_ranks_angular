import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  allAuthors: any;

  constructor(private _httpService: HttpService, public router: Router) { 
    _httpService.getAllAuthors().subscribe(data => this.allAuthors = data)
  }

  deleteAuthor(id: string) {
    this._httpService.deleteAuthor(id).subscribe(data => {
      console.log("data from delete:", data);
      this._httpService.getAllAuthors().subscribe(data => this.allAuthors = data)
      this.router.navigate(['']);
    })
  }

  ngOnInit() {
  }

}
