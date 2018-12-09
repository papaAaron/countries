import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, ElementRef, NO_ERRORS_SCHEMA} from '@angular/core';
import { CountriesComponent } from './countries.component';
import {MatDialog, MatDialogModule, MatTableModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CountryService} from '../country.service';
import {Overlay} from '@angular/cdk/overlay';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {Country} from '../Country';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesComponent , ],
      imports: [ MatTableModule , HttpClientTestingModule, MatDialogModule],
      providers: [CountryService, MatDialog, Overlay],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
