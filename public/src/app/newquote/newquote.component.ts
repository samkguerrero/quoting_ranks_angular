import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {

  author: any;
  authorId: string;
  newQuote: any;

  constructor(private _httpService: HttpService, public _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.newQuote = {content: "", vote: 0}
    this.author = {name: ""}
    this.authorId = this._activatedRoute.snapshot.paramMap.get('id')
    this._httpService.getAuthor(this.authorId).subscribe(data => this.author = data)
  }

  createQuote() {
    console.log("creating quote from hitting button")
    this._httpService.addAuthorQuote(this.authorId, this.newQuote).subscribe(data => {
      console.log("Got data from post back", data);
      this.newQuote = {content: "", vote: ""}
      this._router.navigate(['/quotes/',this.authorId])
    })
  }

}
