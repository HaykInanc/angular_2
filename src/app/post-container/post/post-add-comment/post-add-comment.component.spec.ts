import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddCommentComponent } from './post-add-comment.component';

describe('PostAddCommentComponent', () => {
  let component: PostAddCommentComponent;
  let fixture: ComponentFixture<PostAddCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
