import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsComponent } from './cats.component';
import {StoreModule} from "@ngrx/store";

describe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatsComponent, StoreModule.forRoot()]
    });
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
