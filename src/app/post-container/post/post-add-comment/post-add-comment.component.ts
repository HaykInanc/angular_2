import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-add-comment',
  templateUrl: './post-add-comment.component.html',
  styleUrls: ['./post-add-comment.component.sass']
})



export class PostAddCommentComponent implements OnInit {
  imgFile:object;
  text:string;
  @Input() id;
  constructor(private service:PostService) { }

  ngOnInit() {
  }


  submit(event){
    event.preventDefault();
    this.service.addComment(this.id , this.text).subscribe(elem=>console.log(elem))
  }
}
