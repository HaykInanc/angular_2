import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.sass']
})
export class PostCommentComponent implements OnInit {


  @Input() comment;
  constructor() { }

  ngOnInit() {
  }

}
