import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFacturesComponent } from './search-factures.component';

describe('SearchFacturesComponent', () => {
  let component: SearchFacturesComponent;
  let fixture: ComponentFixture<SearchFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFacturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
