import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Restful Tasks';
  all_tasks: object = [];
  queried_task: object = {};

  constructor(private _httpService: HttpService) {
    _httpService.getTasks().subscribe(data => this.all_tasks = data)
    _httpService.getTask().subscribe(data => this.queried_task = data)
  }

}
