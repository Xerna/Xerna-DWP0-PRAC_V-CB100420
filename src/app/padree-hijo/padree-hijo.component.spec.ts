import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreeHijoComponent } from './padree-hijo.component';

describe('PadreeHijoComponent', () => {
  let component: PadreeHijoComponent;
  let fixture: ComponentFixture<PadreeHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadreeHijoComponent]
    });
    fixture = TestBed.createComponent(PadreeHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
