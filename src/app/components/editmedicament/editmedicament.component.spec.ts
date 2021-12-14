import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmedicamentComponent } from './editmedicament.component';

describe('EditmedicamentComponent', () => {
  let component: EditmedicamentComponent;
  let fixture: ComponentFixture<EditmedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
