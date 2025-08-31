import { Component, inject, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Post } from "src/app/model/post.model";
import { PostsService } from "src/app/services/posts/posts.service";
import { ComposerComponent } from "../composer/composer.component";
import { PostcardComponent } from "../post-card/post-card.component";

@Component({
  selector: "app-post-detail",
  imports: [PostcardComponent, ComposerComponent, MatIconModule, RouterModule],
  templateUrl: "./post-detail.component.html",
  standalone: true,
})
export class PostDetailComponent implements OnInit {
  activeRoute = inject(ActivatedRoute);
  postService = inject(PostsService);
  parentPost: Post = new Post();
  childrenPosts: Post[];

  ngOnInit() {
    const postId = this.activeRoute.snapshot.params["id"];
    this.getPostById(postId);
  }

  getPostById(id: string) {
    this.postService.getPostById(id).subscribe((res) => {
      this.parentPost = res.parent;
      this.childrenPosts = res.children;
    });
  }

  refresh(event: any) {
    this.childrenPosts.unshift(event);
  }
}
