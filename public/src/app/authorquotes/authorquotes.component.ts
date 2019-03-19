import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authorquotes',
  templateUrl: './authorquotes.component.html',
  styleUrls: ['./authorquotes.component.css']
})
export class AuthorquotesComponent implements OnInit {

  author: any;
  authorId: string;

  constructor(private _httpService: HttpService, public _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.author = {name: ""}
    this.authorId = this._activatedRoute.snapshot.paramMap.get('id')
    this._httpService.getAuthor(this.authorId).subscribe(data => this.author = data)
  }

  voteUp(content: string) {
    // console.log("vote up")
    this._httpService.updateAuthorQuote({id: this.authorId, content: content, vote:1 }).subscribe(data => {console.log(data); this._httpService.getAuthor(this.authorId).subscribe(data => this.author = data)})
  }

  voteDown(content: string) {
    // console.log("vote down")
    this._httpService.updateAuthorQuote({id: this.authorId, content: content, vote:-1 }).subscribe(data => { console.log(data); this._httpService.getAuthor(this.authorId).subscribe(data => this.author = data)})
    
  }

  deleteAuthorQuote(id: string, content: string) {
    // console.log("in typescript file")
    // console.log(id)
    // console.log(content)
    this._httpService.deleteAuthorQuote(id, content).subscribe(data => {console.log(data); this._httpService.getAuthor(this.authorId).subscribe(data => this.author = data)})
  }
}
