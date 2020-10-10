import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMciComponent } from './home.component';

describe('HomeMciComponent', () => {
  let component: HomeMciComponent;
  let fixture: ComponentFixture<HomeMciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
