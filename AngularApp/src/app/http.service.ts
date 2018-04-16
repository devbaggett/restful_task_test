import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
	constructor(private _http: HttpClient) {
		// this.getTasks();
		// this.getTask();
	}
	getTasks(){
		// let tempObservable = this._http.get('/tasks');
		// tempObservable.subscribe(data => console.log('Got our tasks!', data));
		return this._http.get('tasks');
	}
	getTask(id){
		return this._http.get('/retrieve/' + id);
	}
	createTask(task){
		return this._http.post('/create', task);
	}
	updateTask(id, updatedTask){
		return this._http.put('/update/' + id, updatedTask);
	}
	deleteTask(id){
		return this._http.delete('/delete/' + id);
	}
}
