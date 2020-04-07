import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.sass']
})
export class PostContainerComponent implements OnInit {
  private posts:any;
  constructor(private postsData:PostService) { }

  ngOnInit() { 
    this.postsData.getAll().subscribe(elem=>this.posts = elem['data']) 
  }

}
