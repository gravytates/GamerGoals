import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxComponent } from './xbox.component';

describe('XboxComponent', () => {
  let component: XboxComponent;
  let fixture: ComponentFixture<XboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
