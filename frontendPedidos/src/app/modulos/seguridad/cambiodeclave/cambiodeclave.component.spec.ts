import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiodeclaveComponent } from './cambiodeclave.component';

describe('CambiodeclaveComponent', () => {
  let component: CambiodeclaveComponent;
  let fixture: ComponentFixture<CambiodeclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiodeclaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiodeclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
