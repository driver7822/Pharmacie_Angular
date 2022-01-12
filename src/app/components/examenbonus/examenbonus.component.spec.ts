import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenbonusComponent } from './examenbonus.component';

describe('ExamenbonusComponent', () => {
  let component: ExamenbonusComponent;
  let fixture: ComponentFixture<ExamenbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
