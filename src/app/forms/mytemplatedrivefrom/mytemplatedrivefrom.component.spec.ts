import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytemplatedrivefromComponent } from './mytemplatedrivefrom.component';

describe('MytemplatedrivefromComponent', () => {
  let component: MytemplatedrivefromComponent;
  let fixture: ComponentFixture<MytemplatedrivefromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytemplatedrivefromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytemplatedrivefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
