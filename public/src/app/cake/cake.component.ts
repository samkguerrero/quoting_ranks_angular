import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input() queriedCake: any;

  averageRating: any;

  constructor() { }

  ngOnInit() {
    let allRatings = this.queriedCake.ratings.map(rating => rating.rating )
    this.averageRating = (allRatings.reduce((a,b) => a + b)/this.queriedCake.ratings.length).toFixed(2)
  }

}
