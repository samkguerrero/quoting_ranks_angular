import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  @Input() taskToShow: any;
  @Input() updatedTask: any;
  constructor() { }

  ngOnInit() {
  }

}
