import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui/pages/home/home.component";
import {DogsComponent} from "./ui/pages/dogs/dogs.component";

const routes: Routes = [
  {path: "", component: HomeComponent},

  {
    path: "dogs",
    loadComponent: () => import("./ui/pages/dogs/dogs.component").then(c => DogsComponent)
  },

  {path: "**", redirectTo: ""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
