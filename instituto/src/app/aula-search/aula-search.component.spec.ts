import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaSearchComponent } from './aula-search.component';

describe('AulaSearchComponent', () => {
  let component: AulaSearchComponent;
  let fixture: ComponentFixture<AulaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AulaSearchComponent]
    });
    fixture = TestBed.createComponent(AulaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
