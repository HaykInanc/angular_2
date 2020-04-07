import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.sass']
})
export class AddCommentComponent implements OnInit {
  
  imgUrl:string;
  text:string;
  constructor(private commentsService:CommentService) { 

  }

  ngOnInit() {
  }

  submit(event){
    event.preventDefault()
  }

  add(){
    console.log('привет')
    this.commentsService.add(this.text, this.imgUrl)
  }

}
