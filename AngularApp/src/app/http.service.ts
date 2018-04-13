import { Injectable } from '@angular/core';

import { HttpService } from '@angular/common/httpS';

@Injectable()
export class HttpService {
	constructor(private _http: httpClient) {
		this.getTasks();
	}
	getTasks(){
		let tempObservable = this._http.get('/tasks');
		tempObservable.subscribe(data => console.log('Got our tasks!', data));
	}
}
