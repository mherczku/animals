import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HotToastService} from "@ngneat/hot-toast";

@Injectable({
  providedIn: 'root'
})
export class CatRestrictionService {

  private isCatAvailable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private readonly toast: HotToastService) {}

  makeCatsAvailable() {
    if(!this.isCatAvailable.value) {
      this.isCatAvailable.next(true);
    }
  }

  watchCatAvailable(): Observable<boolean> {
    return this.isCatAvailable.asObservable();
  }
  checkCatAvailableAndWarn(): boolean {
    if(!this.isCatAvailable.value) {
      this.toast.warning("Cats are not available before watching mice!")
    }
    return this.isCatAvailable.value;
  }
}
