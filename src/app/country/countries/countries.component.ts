import { Country } from './../Country';
import { CountryService } from './../country.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { CountryDetailsComponent } from '../country-details/country-details.component';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountryService]
})
export class CountriesComponent implements OnInit {

  private countries: Country[];
  private selectedCountry: Country;
  name: String;
  country: Country;


  constructor( private countryService: CountryService, public dialog: MatDialog) {
  }


  displayedColumns: string[] = ['name', 'capital', 'region', 'alpha2Code', 'actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // function to filter datatable elements
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.getAllCountries();
  }
  // this function return countries
  getAllCountries() {
    console.log('---------- loading countries ');
    this.countryService.findAllCountries().subscribe(
      countries => {
        this.countries = countries;
        this.dataSource = new MatTableDataSource<Country>(countries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.countries);
        console.log('----------success!! list loaded');
      },
      err => {
        console.log(err);
      });
  }
  openDialog(row): void {
    console.log(row);
    this.selectedCountry = row;
    if (row) {
      this.callCountryDetail();
    }
  }
  callCountryDetail() {
    const dialogRef = this.dialog.open(CountryDetailsComponent, {
      maxWidth: '100%',

      data: { country: this.selectedCountry, imageUrl: this.selectedCountry.flag }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.country = result;
    });
  }
}
