import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoDosComponent } from './cuerpo-dos.component';

describe('CuerpoDosComponent', () => {
  let component: CuerpoDosComponent;
  let fixture: ComponentFixture<CuerpoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
