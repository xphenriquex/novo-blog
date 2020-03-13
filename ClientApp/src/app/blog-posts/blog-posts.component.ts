import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/BlogPost';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) {

   }

  ngOnInit(): void {
    this.loadBlogPosts();
  }

  loadBlogPosts() {
    this.blogPosts$ = this.blogPostService.getBlogPosts();
  }

  delete(postId) {
    const ans = confirm('Do you want to delete blog post with id: ' + postId);
    
    if(ans) {
      this.blogPostService.deleteBlogPost(postId).subscribe((data) => this.loadBlogPosts());
    }
  }

}
