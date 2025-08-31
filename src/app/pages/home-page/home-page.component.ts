import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ComposerComponent } from "src/app/ui/composer/composer.component";
import { FeedListComponent } from "src/app/ui/feed-list/feed-list.component";

@Component({
  standalone: true,
  selector: "app-home-page",
  imports: [ComposerComponent, FeedListComponent],
  templateUrl: "./home-page.component.html",
})
export class HomePageComponent {
  refresher;

  refresh(event) {
    this.refresher = event;
  }
}
