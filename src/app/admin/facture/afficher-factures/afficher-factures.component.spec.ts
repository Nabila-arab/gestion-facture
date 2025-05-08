import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFacturesComponent } from './afficher-factures.component';

describe('AfficherFacturesComponent', () => {
  let component: AfficherFacturesComponent;
  let fixture: ComponentFixture<AfficherFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherFacturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
