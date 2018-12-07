import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesComponent } from './countries/countries.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: '', component: CountriesComponent},
{path: 'countries', component: CountriesComponent},
{path: 'countries/country/details/:name', component: CountryDetailsComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
