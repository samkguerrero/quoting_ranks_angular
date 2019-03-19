import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {

  newAuthorUpdate: object;
  id: string;

  constructor(private _httpService: HttpService, public _router: Router, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.newAuthorUpdate = {name: ""}
    this.id = this._activatedRoute.snapshot.paramMap.get('id')
    this._httpService.getAuthor(this.id).subscribe(data => this.newAuthorUpdate = data)
  }

  updateAuthor(){
    this._httpService.updateAuthor(this.id,this.newAuthorUpdate).subscribe(data => {
      console.log("Got data from post back", data)
      this._router.navigate(['']);
    })
  }

}
