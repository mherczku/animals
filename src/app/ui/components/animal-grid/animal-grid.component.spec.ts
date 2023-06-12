import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGridComponent } from './animal-grid.component';
import {StoreModule} from "@ngrx/store";

describe('AnimalGridComponent', () => {
  let component: AnimalGridComponent;
  let fixture: ComponentFixture<AnimalGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnimalGridComponent, StoreModule.forRoot()]
    });
    fixture = TestBed.createComponent(AnimalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
