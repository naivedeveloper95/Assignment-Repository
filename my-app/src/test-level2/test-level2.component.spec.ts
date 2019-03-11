import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLevel2Component } from './test-level2.component';

describe('TestLevel2Component', () => {
  let component: TestLevel2Component;
  let fixture: ComponentFixture<TestLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
