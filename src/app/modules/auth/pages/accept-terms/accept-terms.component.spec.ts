import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTermsComponent } from './accept-terms.component';

describe('AcceptTermsComponent', () => {
  let component: AcceptTermsComponent;
  let fixture: ComponentFixture<AcceptTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceptTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
