import { CommonModule, DatePipe, NgClass, NgIf } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { Router, RouterModule } from "@angular/router";
import { Post } from "src/app/model/post.model";
import { PostsService } from "src/app/services/posts/posts.service";

@Component({
  standalone: true,
  selector: "app-post-card",
  imports: [
    RouterModule,
    DatePipe,
    MatButtonModule,
    NgClass,
    NgIf,
    CommonModule,
    RouterModule
  ],
  templateUrl: "./post-card.component.html",
})
export class PostcardComponent {
  @Input() post!: Post;
  api = inject(PostsService);
  readonly dialog = inject(MatDialog);
  readonly router = inject(Router);

  doLike() {
    this.api.likePost(this.post.id).subscribe((r: Post) => {
      this.post.likeCount = r.likeCount;
      this.post.liked = r.liked;
    });
  }

  doRepost() {
    this.api.rePost(this.post.id).subscribe((r) => {
      this.post.repostCount = r.repostCount;
    });
  }

  async doReply() {
    const { ReplyPostComponent } = await import(
      "../reply-post/reply-post.component"
    );
    this.dialog.open(ReplyPostComponent, {
      width: "45vw",
      data: { ...this.post, isReply: true },
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.router.navigate(["dashboard", "post", this.post.id]);
      }
    });
  }
}
