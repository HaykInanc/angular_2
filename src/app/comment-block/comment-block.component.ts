import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.sass']
})
export class CommentBlockComponent implements OnInit {
  
  comments:Array<object>;

  constructor(private commentsService:CommentService) { 
    this.commentsService.getAll().subscribe(elem=>this.comments = elem.data);
  }

  ngOnInit() {
    
  }


}
