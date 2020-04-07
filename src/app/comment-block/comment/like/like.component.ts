import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.sass']
})
export class LikeComponent implements OnInit {
  @Input() likeCnt:number;
  @Input() commentId:number;

  constructor(private commentsService:CommentService) { }

  ngOnInit() {
  
  }

  like(){
    this.commentsService.addLike(this.commentId);
    this.likeCnt++;
  }

}
