import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "src/app/services/profile.service";
import { PostcardComponent } from "src/app/ui/post-card/post-card.component";

@Component({
  standalone: true,
  selector: "app-profile-page",
  imports: [PostcardComponent, CommonModule],
  templateUrl: "./profile-page.component.html",
})
export class ProfilePageComponent {
  route = inject(ActivatedRoute);
  api = inject(ProfileService);
  handle = "";
  user: any = null;
  posts: any[] = [];

  ngOnInit() {
    this.handle = this.route.snapshot.paramMap.get("handle") || "vivek";
    this.getData();
  }
  getData() {
    this.api.getPostsByHandle(this.handle).subscribe((res: any) => {
      console.log(res);
      this.user = res;
      this.posts = res.posts;
    });
  }
}
