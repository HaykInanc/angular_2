import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  host:string;
  constructor(private http:HttpClient) { 
    this.host = 'http://127.0.0.1:8000';
  }

  getAll(){

    return this.http.get(`${this.host}/api/`)
  }

  addLike(id){
    return this.http.get(`${this.host}/api/addLike/${id}`)
  }

  addComment(post_id, text){
    let pushkin = {post_id, text};
    return this.http.post(`${this.host}/api/addComment/`, pushkin,
    {
      headers: new HttpHeaders({
        'Authorization': `Token ${localStorage}`
      })
    })
  }

  

}
