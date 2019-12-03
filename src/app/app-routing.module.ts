import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TodoComponent } from "./todo/todo.component";
import { DoneComponent } from "./done/done.component";
import { BlockedComponent } from "./blocked/blocked.component";
import { InprogressComponent } from "./inprogress/inprogress.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "todo", component: TodoComponent },
      { path: "inprogress", component: InprogressComponent },
      { path: "done", component: DoneComponent },
      { path: "blocked", component: BlockedComponent }
    ]
  },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
