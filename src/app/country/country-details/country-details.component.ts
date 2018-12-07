import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
name: String;
  private sub: any;
  
  constructor(private route: ActivatedRoute) {}

ngOnInit() {
 /*this.sub = this.route.params.subscribe(params => {
    this.name = params['name'];
    console.log(name);
  });*/
}
}
