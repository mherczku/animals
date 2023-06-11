import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui/pages/home/home.component";
import {DogsComponent} from "./ui/pages/dogs/dogs.component";
import {CatRestrictionService} from "./service/cat-restriction/cat-restriction.service";
import {CatsComponent} from "./ui/pages/cats/cats.component";
import {MiceComponent} from "./ui/pages/mice/mice.component";

const routes: Routes = [
  {path: "", component: HomeComponent},

  {
    path: "dogs",
    loadComponent: () => import("./ui/pages/dogs/dogs.component").then(_c => DogsComponent)
  },

  {
    path: "cats",
    canMatch: [() => inject(CatRestrictionService).checkCatAvailableAndWarn()],
    loadComponent: () => import("./ui/pages/cats/cats.component").then(_c => CatsComponent)
  },
  {
    path: "mice",
    loadComponent: () => import("./ui/pages/mice/mice.component").then(_c => MiceComponent)
  },

  {path: "**", redirectTo: ""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
