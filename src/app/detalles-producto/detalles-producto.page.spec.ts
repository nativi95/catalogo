import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesProductoPage } from './detalles-producto.page';

describe('DetallesProductoPage', () => {
  let component: DetallesProductoPage;
  let fixture: ComponentFixture<DetallesProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
