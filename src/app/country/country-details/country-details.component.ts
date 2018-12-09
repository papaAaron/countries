import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Country } from '../Country';



export interface DialogData {
  country: Country;
  imageUrl: String;
}

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }



}

