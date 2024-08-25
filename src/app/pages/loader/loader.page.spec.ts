import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {

  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let navCtrl: NavController;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [IonicModule.forRoot(), RouterTestingModule, AppRoutingModule],  // Tambahkan koma di sini
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  }));

  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate');

    // Panggil metode yang memicu navigasi setelah loading selesai
    component.ngOnInit();
    
    tick(1500);

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));

});
