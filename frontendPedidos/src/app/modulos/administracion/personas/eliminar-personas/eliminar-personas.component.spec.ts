import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPersonasComponent } from './eliminar-personas.component';

describe('EliminarPersonasComponent', () => {
  let component: EliminarPersonasComponent;
  let fixture: ComponentFixture<EliminarPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
