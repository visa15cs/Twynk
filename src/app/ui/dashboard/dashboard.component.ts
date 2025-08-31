import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SearchComponent } from "../search/search.component";
import { TrendsComponent } from "../trends/trends.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [SidebarComponent, RouterModule, SearchComponent, TrendsComponent],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {}
