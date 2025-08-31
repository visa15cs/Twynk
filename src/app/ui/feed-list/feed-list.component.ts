import { NgIf, NgFor } from "@angular/common";
import { Component, inject, Input, SimpleChange, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "src/app/model/post.model";
import { PostsService } from "src/app/services/posts/posts.service";
import { PostcardComponent } from "../post-card/post-card.component";

@Component({
  standalone: true,
  selector: "app-feed-list",
  imports: [PostcardComponent, NgIf, NgFor],
  templateUrl: "./feed-list.component.html",
})
export class FeedListComponent {
  api = inject(PostsService);
  @Input() posts: Post[] = [];
  @Input() refresh;

  ngOnInit() {
    this.loaddata();
  }

  ngOnChanges(changes:SimpleChanges) {
    if (!changes.refresh.firstChange) {
      this.posts.unshift(changes.refresh.currentValue);
    }
  }

  loaddata() {
    this.api.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
      },
      error: (err) => {
        console.error("Error loading posts", err);
      },
    });
  }
}
