import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEventComponent } from './binding-event.component';

describe('BindingEventComponent', () => {
  let component: BindingEventComponent;
  let fixture: ComponentFixture<BindingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
