import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSecHeaderComponent } from './main-sec-header.component';

describe('MainSecHeaderComponent', () => {
  let component: MainSecHeaderComponent;
  let fixture: ComponentFixture<MainSecHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSecHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSecHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
