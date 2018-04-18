import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  	title = 'Restful Tasks API';
  	tasks = [];
    task = {};
    newTask: any;
    edit = false;
    editTask: any;
  	constructor(private _httpService: HttpService){}
  	ngOnInit(){
      	// this.getTasksFromService();
        this.newTask = { title: "", description: "" };
    }
  	getTasksFromService(){
    	let observable = this._httpService.getTasks();
    	observable.subscribe(data => {
    		console.log("Got our tasks!", data);
    		this.tasks = data['tasks'];
    		console.log(this.tasks);
    	});
    }
    getOneTask(id){
       let observable = this._httpService.getTasks();
       observable.subscribe(data => {
         console.log("Got our task!", data);
          id -= 1;
          this.task = data['tasks'][id];
          console.log(this.task);
       })
    }
    addTaskFromService(){
      let observable = this._httpService.createTask(this.newTask);
      observable.subscribe(data => {
        console.log("Created task!", data);
      })
      this.getTasksFromService();
      this.newTask = { title: "", description: ""};
    }
    editTaskFromService(id){
      let observable = this._httpService.updateTask(id, this.editTask);
      observable.subscribe(data => {
        console.log('Task edited!', data);
      })
      this.edit = false;
      this.getTasksFromService();
    }
    deleteTaskFromService(id){
      let observable = this._httpService.deleteTask(id);
      observable.subscribe(data => {
        console.log("Deleted task!", data);
      })
      this.getTasksFromService();
    }
  	getTaskById(id){
  		if (id){
  			let tempObservable = this._httpService.getTask(id);
  			tempObservable.subscribe(data => {
  				console.log("Task ready for edit!", data['task'][0]);
          this.edit = true;
          this.task = data['task'][0];
          this.editTask = { id: this.task['_id'], title: this.task['title'], description: this.task['description'] };
  			})
  		}
  	}
}


