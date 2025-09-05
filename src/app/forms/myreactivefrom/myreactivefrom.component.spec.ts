import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreactivefromComponent } from './myreactivefrom.component';

describe('MyreactivefromComponent', () => {
  let component: MyreactivefromComponent;
  let fixture: ComponentFixture<MyreactivefromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyreactivefromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyreactivefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
