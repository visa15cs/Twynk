import { Component } from "@angular/core";
import { FeedListComponent } from "src/app/ui/feed-list/feed-list.component";

@Component({
  standalone: true,
  selector: "app-explore-page",
  imports: [FeedListComponent],
  templateUrl: "./explore-page.component.html",
})
export class ExplorePageComponent {}
