import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment-block/comment/comment.component';
import { CommentBlockComponent } from './comment-block/comment-block.component';
import { AddCommentComponent } from './comment-block/add-comment/add-comment.component';
import { CommentService } from './comment.service';
import { LikeComponent } from './comment-block/comment/like/like.component';
import { ColorContainerComponent } from './color-container/color-container.component';
import { ColorComponent } from './color-container/color/color.component';
import { ColorsService } from './colors.service';
import { RoutingErrorComponent } from './routing-error/routing-error.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostComponent } from './post-container/post/post.component';
import { PostCommentComponent } from './post-container/post/post-comment/post-comment.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';
import { PostAddCommentComponent } from './post-container/post/post-add-comment/post-add-comment.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

const appRouting:Routes = [
  {path:'', component: CommentBlockComponent},
  {path:'colors', component: ColorContainerComponent},
  {path:'posts', component: PostContainerComponent},
  {path:'login', component: LoginComponent},
  {path:'**', component: RoutingErrorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentBlockComponent,
    AddCommentComponent,
    LikeComponent,
    ColorContainerComponent,
    ColorComponent,
    RoutingErrorComponent,
    PostContainerComponent,
    PostComponent,
    PostCommentComponent,
    ScrollUpComponent,
    PostAddCommentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [
    CommentService,
    ColorsService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
