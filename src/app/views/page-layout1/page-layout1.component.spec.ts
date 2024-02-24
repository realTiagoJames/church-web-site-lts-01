import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayout1Component } from './page-layout1.component';

describe('PageLayout1Component', () => {
  let component: PageLayout1Component;
  let fixture: ComponentFixture<PageLayout1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayout1Component]
    });
    fixture = TestBed.createComponent(PageLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
