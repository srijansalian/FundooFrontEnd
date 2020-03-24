import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglennoteComponent } from './singlennote.component';

describe('SinglennoteComponent', () => {
  let component: SinglennoteComponent;
  let fixture: ComponentFixture<SinglennoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglennoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglennoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
