import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateMoneyComponent } from './donate-money.component';

describe('DonateMoneyComponent', () => {
  let component: DonateMoneyComponent;
  let fixture: ComponentFixture<DonateMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
