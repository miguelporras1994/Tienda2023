import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarDialogComponent } from './shopping-car-dialog.component';

describe('ShoppingCarDialogComponent', () => {
  let component: ShoppingCarDialogComponent;
  let fixture: ComponentFixture<ShoppingCarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCarDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
