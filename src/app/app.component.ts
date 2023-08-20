import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskListApp = [];

  ngOnInit(): void {
    var tempGet: any = localStorage.getItem('setList');

    if (tempGet !== null) {
      this.taskListApp = JSON.parse(tempGet);
    }
  }

  @ViewChild(ListComponent) listComponent: any;

  title = 'My Task List';

  addInput = '';

  addTask(addInputGet: any) {
    console.log('print' + addInputGet);

    this.listComponent.addIntoList(addInputGet);
    this.addInput = '';
  }
}
