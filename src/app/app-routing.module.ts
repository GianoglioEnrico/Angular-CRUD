import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from "./components/todos/todos.component"
import { AboutComponent } from "./components/about/about.component"

const routes: Routes = [
  { path: "", redirectTo: "/todos-list", pathMatch: "full" },
  { path: "todos-list", component: TodosComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
