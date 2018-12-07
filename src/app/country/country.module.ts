import { CustomMaterialModule } from './../material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CountriesComponent, CountryDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountryRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CountryModule { }
