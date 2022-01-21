import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesInvestimentoComponent } from './detalhes-investimento.component';

describe('DetalhesInvestimentoComponent', () => {
  let component: DetalhesInvestimentoComponent;
  let fixture: ComponentFixture<DetalhesInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
