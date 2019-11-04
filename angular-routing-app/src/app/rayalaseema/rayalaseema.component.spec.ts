import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RayalaseemaComponent } from './rayalaseema.component';

describe('RayalaseemaComponent', () => {
  let component: RayalaseemaComponent;
  let fixture: ComponentFixture<RayalaseemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayalaseemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RayalaseemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
