import { Routes } from "@angular/router";
import { authGuard } from "./app/auth/auth.guard";
import { authRoutes } from "./app/auth/auth.routes";
import { RedirectComponent } from "./app/redirect/redirect.component";
import { BlankComponent } from "./app/auth/blank/blank.component";
import { DashboardComponent } from "./app/ui/dashboard/dashboard.component";
import { HomePageComponent } from "./app/pages/home-page/home-page.component";
import { ExplorePageComponent } from "./app/pages/explore-page/explore-page.component";
import { ProfilePageComponent } from "./app/pages/profile-page/profile-page.component";
import { PostDetailComponent } from "./app/ui/post-detail/post-detail.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: RedirectComponent,
  },
  {
    path: "authentication",
    component: BlankComponent,
    children: authRoutes,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: "", component: HomePageComponent },
      { path: "explore", component: ExplorePageComponent },
      { path: "post/:id", component: PostDetailComponent },
    ],
  },
  { path: "u/:handle", component: ProfilePageComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
