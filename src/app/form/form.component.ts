import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  title= "My Task List";
  addInput= '';

  addTask(addInputGet :any){
    console.log('print' + addInputGet);
  }

}
