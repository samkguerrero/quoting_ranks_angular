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
  newTask: any;
  editedTask: any;

  constructor(private _httpService: HttpService) {
  }

  ngOnInit(){
    this.newTask = {title: "", description: ""}
    this.editedTask = {title: "", description: ""}
  }

  getAllTasks(): void { 
    this._httpService.getTasks().subscribe(data => this.all_tasks = data)
  }

  onSubmitCreate(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""}
    })
  }

  onSubmitEdit(id: String){
    let observable = this._httpService.updateTask(id,this.newTask);
    observable.subscribe(data => {
      this.newTask = {title: "", description: ""}
      this.queried_task = {};
      this.getAllTasks();
    })
  }

  deleteTask(id: String): void { 
    this._httpService.deleteTask(id).subscribe(data => console.log("data from delete:", data))
  }

  editTask(id: String): void { 
    this._httpService.getTask(id).subscribe(data => {this.queried_task = data; this.editedTask = data })
  }

}
