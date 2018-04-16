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
  	constructor(private _httpService: HttpService){}
  	ngOnInit(){
      	this.getTasksFromService();
    }
  	getTasksFromService(){
    	let observable = this._httpService.getTasks();
    	observable.subscribe(data => {
    		console.log("Got our tasks!", data);
    		this.tasks = data['tasks'];
    		console.log(this.tasks);
    	});
	}
	getTaskFromService(id){
		if (id){
			let tempObservable = this._httpService.getTask(id);
			tempObservable.subscribe(data => {
				console.log("Got our task!", data);
			})
		}
	}


}


