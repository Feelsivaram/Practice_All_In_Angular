import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getMethod(url) {
    return this.http.get(url);
  }
}

let protocal: string = "https://";
let baseUrl: string = protocal + "jsonplaceholder.typicode.com/";

export class HttpUrls {
  getUsers = baseUrl + 'users';
}
