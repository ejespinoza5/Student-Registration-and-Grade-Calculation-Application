import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEstudianteComponent } from './tabla-estudiante.component';

describe('TablaEstudianteComponent', () => {
  let component: TablaEstudianteComponent;
  let fixture: ComponentFixture<TablaEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
