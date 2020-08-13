import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassExampleComponent } from './ngclass-example.component';

describe('NgclassExampleComponent', () => {
  let component: NgclassExampleComponent;
  let fixture: ComponentFixture<NgclassExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
