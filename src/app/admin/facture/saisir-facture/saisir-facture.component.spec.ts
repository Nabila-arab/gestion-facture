import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirFactureComponent } from './saisir-facture.component';

describe('SaisirFactureComponent', () => {
  let component: SaisirFactureComponent;
  let fixture: ComponentFixture<SaisirFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaisirFactureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisirFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
