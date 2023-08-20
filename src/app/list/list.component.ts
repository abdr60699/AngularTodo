import { Component ,Input,} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input() taskList :any = [];

  subTitle= "My Current Tasks";
 


  addIntoList(incomeList:any){
    this.taskList.push(incomeList);
    localStorage.setItem('setList',JSON.stringify(this.taskList))
  }

  delete(i :number){
    this.taskList.splice(i,1);
    localStorage.setItem('setList',JSON.stringify(this.taskList))
    // localStorage.clear();
  }

  

  getLocal() {
    var tempGet: any = localStorage.getItem('setList');
  
    if (localStorage.getItem('setList') !== null) {
    //  this.taskList= JSON.parse(localStorage.getItem('setList'));
     console.log(  this.taskList);
     
    } else {
      // Handle the case where tempGet is null
    }
  }

 
 
  
}
