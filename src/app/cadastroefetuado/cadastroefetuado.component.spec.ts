import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroefetuadoComponent } from './cadastroefetuado.component';

describe('CadastroefetuadoComponent', () => {
  let component: CadastroefetuadoComponent;
  let fixture: ComponentFixture<CadastroefetuadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroefetuadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroefetuadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
