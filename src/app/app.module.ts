import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HotToastModule} from "@ngneat/hot-toast";
import {StoreModule} from "@ngrx/store";
import {animalReducer} from "./store/reducers/animal.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AnimalEffects} from "./store/effects/animal.effects";
import {NavbarComponent} from "./ui/components/navbar/navbar.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HotToastModule.forRoot({
      dismissible: true,
      position: "bottom-center"
    }),
    StoreModule.forRoot(),
    StoreModule.forFeature("animals", animalReducer),
    EffectsModule.forRoot([AnimalEffects]),
    NavbarComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
