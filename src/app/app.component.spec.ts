import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Router} from "@angular/router";
import {routes} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {CatsComponent} from "./ui/pages/cats/cats.component";
import {MiceComponent} from "./ui/pages/mice/mice.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from "./ui/components/navbar/navbar.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        NavbarComponent,
        NoopAnimationsModule,
        MiceComponent,
        CatsComponent,
        StoreModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Animals'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Animals');
  });


  /**
   * Test requirements:
   */

  it('should be on default page at startup', () => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const router = TestBed.inject(Router);

    expect(router.url).toEqual('/');
  });

  it('should not navigate to cats before mice', async () => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const router = TestBed.inject(Router);
    await router.navigateByUrl('/cats')

    expect(router.url).toEqual('/');
  });

  it('can navigate to cats after mice', async () => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const router = TestBed.inject(Router);
    await router.navigateByUrl('/mice')
    fixture.detectChanges();
    expect(router.url).toEqual('/mice');

    await router.navigateByUrl('/cats')
    fixture.detectChanges();
    expect(router.url).toEqual('/cats');

  });

  it('should navigate to default page on bad url', async () => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const router = TestBed.inject(Router);
    await router.navigateByUrl('/bad-url')
    fixture.detectChanges();
    expect(router.url).toEqual('/');

  });


});
