import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedTopicsComponent } from './highlighted-topics.component';

describe('HighlightedTopicsComponent', () => {
  let component: HighlightedTopicsComponent;
  let fixture: ComponentFixture<HighlightedTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightedTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
