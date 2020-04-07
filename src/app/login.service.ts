import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username, password){

    let httpParams = new HttpParams()
                        .append('username', username)
                        .append('password', password);
    this.http.post('http://127.0.0.1:8000/api/token/', httpParams)
             .subscribe(elem=>console.log(elem));
  }

  logout(){
    localStorage.removeItem('token');
  }
}
