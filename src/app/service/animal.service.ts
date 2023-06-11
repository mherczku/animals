import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Animal, AnimalType} from "../interface/animal";
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {
  }

  getAnimals(type: AnimalType): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.baseUrl}/${type}.json`)
  }

}
