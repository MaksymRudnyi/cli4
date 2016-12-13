/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MailItemComponent } from './mail.component.ts';

describe('MailItemComponent', () => {
  let component: MailItemComponent;
  let fixture: ComponentFixture<MailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
