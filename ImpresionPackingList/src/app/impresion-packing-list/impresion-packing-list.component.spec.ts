
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImpresionPackingListComponent } from './impresion-packing-list.component';



describe('SideNavComponent', () => {
  let component: ImpresionPackingListComponent;
  let fixture: ComponentFixture<ImpresionPackingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpresionPackingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresionPackingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
