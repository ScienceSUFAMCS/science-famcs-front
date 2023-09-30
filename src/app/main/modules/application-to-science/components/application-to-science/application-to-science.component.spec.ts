import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationToScienceComponent } from './application-to-science.component';

describe('ApplicationToScienceComponent', () => {
  let component: ApplicationToScienceComponent;
  let fixture: ComponentFixture<ApplicationToScienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationToScienceComponent]
    });
    fixture = TestBed.createComponent(ApplicationToScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
