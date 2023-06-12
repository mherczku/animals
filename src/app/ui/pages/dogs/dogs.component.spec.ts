import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsComponent } from './dogs.component';
import {StoreModule} from "@ngrx/store";

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DogsComponent, StoreModule.forRoot()]
    });
    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
