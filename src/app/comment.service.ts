import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments:Array<object>;

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get('https://reqres.in/api/users');
  } 

  add(text, img){
    this.comments.push({img, text, likeCnt:0})
  }

  addLike(id){
    this.comments.find(obj=>obj.id === id).likeCnt++
  }

  delete(id){
    console.log(id) 
  }
}
