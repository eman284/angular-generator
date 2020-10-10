import { CommericialRegSystemComponent } from './commericial-reg-system.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CommericialRegSystemComponent', () => {
  let component: CommericialRegSystemComponent;
  let fixture: ComponentFixture<CommericialRegSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommericialRegSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommericialRegSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
