import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdashBoardComponent } from './passdash-board.component';

describe('PassdashBoardComponent', () => {
  let component: PassdashBoardComponent;
  let fixture: ComponentFixture<PassdashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassdashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassdashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
