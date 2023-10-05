import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalClassesComponent } from './additional-classes.component';

describe('AdditionalClassesComponent', () => {
  let component: AdditionalClassesComponent;
  let fixture: ComponentFixture<AdditionalClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionalClassesComponent]
    });
    fixture = TestBed.createComponent(AdditionalClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
