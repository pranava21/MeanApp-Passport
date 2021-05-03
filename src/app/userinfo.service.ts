import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class UserinfoService {
	constructor(private http: HttpClient) {}

	getUserInfo(body: any){
		return this.http.post('http://127.0.0.1:3000/usersinfo/getUserInfo', body, {
			observe: 'body',
			withCredentials: true,
			headers: new HttpHeaders().append('Content-Type', 'application/json')
		});
	}

	getUserId(){
		return this.http.get('http://127.0.0.1:3000/usersinfo/getuserid', {
			withCredentials: true,
			headers: new HttpHeaders().append('Content-Type', 'application/json')
		});
	}
}
