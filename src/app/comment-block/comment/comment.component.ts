import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  text:string;
  ava:string;
  likeCnt:number;
  commentId:number;
  @Input() comment;
  constructor(private commentsService:CommentService) { }

  ngOnInit() {
    this.text = this.comment.email;
    this.ava =  this.comment.avatar;
    this.likeCnt =  this.comment.id;
    this.commentId =  this.comment.id;
  }

  delete(){
    this.commentsService.delete(this.commentId);
  }

}
