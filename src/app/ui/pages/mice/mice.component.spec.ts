import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiceComponent } from './mice.component';
import {StoreModule} from "@ngrx/store";

describe('MiceComponent', () => {
  let component: MiceComponent;
  let fixture: ComponentFixture<MiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MiceComponent, StoreModule.forRoot()]
    });
    fixture = TestBed.createComponent(MiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
