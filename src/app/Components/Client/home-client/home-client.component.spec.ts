import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCLientComponent } from './home-client.component';

describe('HomeCLientComponent', () => {
  let component: HomeCLientComponent;
  let fixture: ComponentFixture<HomeCLientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCLientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCLientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
