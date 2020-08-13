import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutesParamsComponent } from './test-routes-params.component';

describe('TestRoutesParamsComponent', () => {
  let component: TestRoutesParamsComponent;
  let fixture: ComponentFixture<TestRoutesParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRoutesParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoutesParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
