import { Component, EventEmitter, Inject, inject, Output } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { Post } from "src/app/model/post.model";
import { ComposerComponent } from "../composer/composer.component";
import { PostcardComponent } from "../post-card/post-card.component";

@Component({
  selector: "app-reply-post",
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    PostcardComponent,
    ComposerComponent,
  ],
  templateUrl: "./reply-post.component.html",
})
export class ReplyPostComponent {
  post: Post;
  @Output() postCreated: any = new EventEmitter<any>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ReplyPostComponent>,
  ) {
    this.post = data;
    console.log(data);
  }

  refresh(event) {
    this.dialogRef.close(event);
    this.postCreated.emit(event);
  }
}
