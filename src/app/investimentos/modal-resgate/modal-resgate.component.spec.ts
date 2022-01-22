import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResgateComponent } from './modal-resgate.component';

describe('ModalResgateComponent', () => {
  let component: ModalResgateComponent;
  let fixture: ComponentFixture<ModalResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalResgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
