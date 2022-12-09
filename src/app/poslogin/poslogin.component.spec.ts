import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosloginComponent } from './poslogin.component';

describe('PosloginComponent', () => {
  let component: PosloginComponent;
  let fixture: ComponentFixture<PosloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
