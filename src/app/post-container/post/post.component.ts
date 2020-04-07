import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

@Input() post;

  constructor(private service:PostService) { }

  ngOnInit() {
  }

  addLike(){ 
    this.service.addLike(this.post.pk).subscribe(()=>this.post.likeCnt++)
  }

}
