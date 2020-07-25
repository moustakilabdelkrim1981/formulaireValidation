import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomontComponent } from './domont.component';

describe('DomontComponent', () => {
  let component: DomontComponent;
  let fixture: ComponentFixture<DomontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
