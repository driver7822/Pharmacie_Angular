import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprescriptionformedecinComponent } from './newprescriptionformedecin.component';

describe('NewprescriptionformedecinComponent', () => {
  let component: NewprescriptionformedecinComponent;
  let fixture: ComponentFixture<NewprescriptionformedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprescriptionformedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprescriptionformedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
