import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBunsComponent } from './search-buns.component';

describe('SearchBunsComponent', () => {
  let component: SearchBunsComponent;
  let fixture: ComponentFixture<SearchBunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBunsComponent]
    });
    fixture = TestBed.createComponent(SearchBunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
