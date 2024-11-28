import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsecHomeComponent } from './mainsec-home.component';

describe('MainsecHomeComponent', () => {
  let component: MainsecHomeComponent;
  let fixture: ComponentFixture<MainsecHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainsecHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsecHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
