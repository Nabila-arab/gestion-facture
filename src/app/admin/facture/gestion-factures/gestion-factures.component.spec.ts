import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFacturesComponent } from './gestion-factures.component';

describe('GestionFacturesComponent', () => {
  let component: GestionFacturesComponent;
  let fixture: ComponentFixture<GestionFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFacturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
