import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmedecinComponent } from './newmedecin.component';

describe('NewmedecinComponent', () => {
  let component: NewmedecinComponent;
  let fixture: ComponentFixture<NewmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
