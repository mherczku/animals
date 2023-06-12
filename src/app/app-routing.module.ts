import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui/pages/home/home.component";
import {DogsComponent} from "./ui/pages/dogs/dogs.component";
import {CatRestrictionService} from "./service/cat-restriction/cat-restriction.service";
import {CatsComponent} from "./ui/pages/cats/cats.component";
import {MiceComponent} from "./ui/pages/mice/mice.component";

export const routes: Routes = [

  {path: "", data: {animation: "home"}, title: "Animals", component: HomeComponent},

  {
    path: "dogs",
    title: "Animals - Dogs",
    data: {animation: "dogs"},
    loadComponent: () => import("./ui/pages/dogs/dogs.component").then(() => DogsComponent)
  },
  {
    path: "cats",
    title: "Animals - Cats",
    data: {animation: "cats"},
    canMatch: [() => inject(CatRestrictionService).checkCatAvailableAndWarn()],
    loadComponent: () => import("./ui/pages/cats/cats.component").then(() => CatsComponent)
  },
  {
    path: "mice",
    title: "Animals - Mice",
    data: {animation: "mice"},
    loadComponent: () => import("./ui/pages/mice/mice.component").then(() => MiceComponent)
  },

  {path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
