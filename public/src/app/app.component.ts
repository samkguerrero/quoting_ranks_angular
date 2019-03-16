import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { InitialStylingValues } from '@angular/core/src/render3/interfaces/styling';

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
  }

  onButtonClick(): void { 
    console.log(`Click event is working`);
    console.log(this)
    this._httpService.getTasks().subscribe(data => this.all_tasks = data)
  } 

  onButtonClickParam(id: String): void { 
    console.log(`Click event is working with num param: ${id}`);
    this._httpService.getTask(id).subscribe(data => this.queried_task = data)
  }



}
