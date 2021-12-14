import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmedicamentComponent } from './newmedicament.component';

describe('NewmedicamentComponent', () => {
  let component: NewmedicamentComponent;
  let fixture: ComponentFixture<NewmedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
