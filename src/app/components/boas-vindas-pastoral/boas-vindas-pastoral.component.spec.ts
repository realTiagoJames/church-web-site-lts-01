import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasVindasPastoralComponent } from './boas-vindas-pastoral.component';

describe('BoasVindasPastoralComponent', () => {
  let component: BoasVindasPastoralComponent;
  let fixture: ComponentFixture<BoasVindasPastoralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoasVindasPastoralComponent]
    });
    fixture = TestBed.createComponent(BoasVindasPastoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
