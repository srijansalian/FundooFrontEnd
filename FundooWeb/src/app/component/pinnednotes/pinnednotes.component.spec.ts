import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnednotesComponent } from './pinnednotes.component';

describe('PinnednotesComponent', () => {
  let component: PinnednotesComponent;
  let fixture: ComponentFixture<PinnednotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnednotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnednotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
