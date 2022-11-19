import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTempaleComponent } from './form-tempale.component';

describe('FormTempaleComponent', () => {
  let component: FormTempaleComponent;
  let fixture: ComponentFixture<FormTempaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTempaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTempaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
