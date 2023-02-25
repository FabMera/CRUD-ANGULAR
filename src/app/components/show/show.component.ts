import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
//importamos el modelo

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  Posts: Post[];
  constructor(private postService: PostService) {}
  ngOnInit(): void {
   /*  this.postService.getPosts().subscribe((res) => {
      this.Posts = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post),
        };
      });
    }); */

    this.postService.getPosts().subscribe((res)=>{
      this.Posts = res.map((e)=>{
        return {id:e.payload.doc.id,...(e.payload.doc.data() as Post)}
      })
    })
  }
  deleteRow = (post)=>this.postService.deletePost(post);
}
