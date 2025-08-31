import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "src/app/model/post.model";
import { PostsService } from "src/app/services/posts/posts.service";
import { ProfileService } from "src/app/services/profile.service";
import { AutoResizeDirective } from "src/app/shared/auto-resize.directive";

@Component({
  standalone: true,
  selector: "app-composer",
  imports: [ReactiveFormsModule, CommonModule, AutoResizeDirective],
  templateUrl: "./composer.component.html",
})
export class ComposerComponent {
  @Output() postCreated = new EventEmitter<any>();
  @Input() isReply: boolean;
  @Input() post: Post;
  fb = inject(FormBuilder);
  api = inject(PostsService);
  profileService = inject(ProfileService);
  router = inject(Router);
  loading = false;
  form = this.fb.group({
    text: ["", [Validators.required, Validators.minLength(1)]],
  });

  submit() {
    if (this.form.invalid || this.loading) return;
    this.loading = true;
    this.api.createPost({ text: this.form.value.text }).subscribe({
      next: (res) => {
        this.form.reset();
        this.postCreated.emit(res);
        this.loading = false;
      },
      error: () => {
      },
    });
  }

  doReply() {
    this.api.replyPost(this.post.id, this.form.value.text).subscribe((res) => {
      this.postCreated.emit(res);
      this.form.reset();
    });
  }
}
