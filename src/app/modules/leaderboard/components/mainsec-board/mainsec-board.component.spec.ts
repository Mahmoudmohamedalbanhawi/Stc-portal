import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsecBoardComponent } from './mainsec-board.component';

describe('MainsecBoardComponent', () => {
  let component: MainsecBoardComponent;
  let fixture: ComponentFixture<MainsecBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainsecBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsecBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
