import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoDeBultoComponent } from './ingreso-de-bulto.component';

describe('IngresoDeBultoComponent', () => {
  let component: IngresoDeBultoComponent;
  let fixture: ComponentFixture<IngresoDeBultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoDeBultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoDeBultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
