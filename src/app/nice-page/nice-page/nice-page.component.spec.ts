import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicePageComponent } from './nice-page.component';

describe('NicePageComponent', () => {
  let component: NicePageComponent;
  let fixture: ComponentFixture<NicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
