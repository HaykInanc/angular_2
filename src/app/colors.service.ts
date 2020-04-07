import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colors:Array<object>;

  constructor(private http:HttpClient) { 
    
  }

  get(){
    return this.http.get('https://reqres.in/api/unknown')
  }

}
