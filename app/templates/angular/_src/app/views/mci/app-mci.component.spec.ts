import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App<%= includeThemeNamePascal %>Component } from './app-<%= includeThemeNameLower %>.component';

describe('App<%= includeThemeNamePascal %>Component', () => {
  let component: App<%= includeThemeNamePascal %>Component;
  let fixture: ComponentFixture<App<%= includeThemeNamePascal %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App<%= includeThemeNamePascal %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App<%= includeThemeNamePascal %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
