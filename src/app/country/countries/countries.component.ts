import { Country } from './../Country';
import { CountryService } from './../country.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountryService]
})
export class CountriesComponent implements OnInit {

  private countries: Country[];
  private selectedCountry : Country;

  constructor(private router: Router, private countryService: CountryService) {
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
    this.countryService.findAll().subscribe(
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
  showSelectedCountry(row) {
    console.log(row);
    this.selectedCountry= row;
    // this.router.navigate(['countries#country-details']);

    this.router.navigate(['/countries/country-details', this.selectedCountry.name]);
    
  }
  redirectNewValeurPage(row) {
    console.log(row);
    this.selectedCountry= row;
    if (row){
      this.router.navigate(['countries/country/details',this.selectedCountry.name]);

    }
  }
  }
  

