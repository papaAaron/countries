import { TestBed, inject } from '@angular/core/testing';
import { CountryService } from './country.service';
import { of } from 'rxjs'; // Add import
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CountryService', () => {
  let countryService: CountryService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    });

    countryService = TestBed.get(CountryService); // Add this
  });

  it('should be created', () => { // Remove inject()
    expect(countryService).toBeTruthy();
  });
  describe('findAllCountries', () => {
    it('should return an Observable<Country[]>', () => {

      countryService.findAllCountries().subscribe(countries => {
        expect(countries.length).toBe(249);
      });
   });
  });




  describe('findCountryByName', () => {
      it('should return a country ', () => {
        const countryResponse = {

          name: "Côte d'Ivoire",
          topLevelDomain: [".ci"],
          alpha2Code: "CI",
          alpha3Code: "CIV",
          callingCodes: ["225"],
          capital: "Yamoussoukro",
          altSpellings: ["CI", "Ivory Coast", "Republic of Côte d'Ivoire", "République de Côte d'Ivoire"],
          region: "Africa",
          subregion: "Western Africa",
          population: 22671331,
          latlng: [8.0, -5.0],
          demonym: "Ivorian",
          area: 322463.0,
          gini: 41.5,
          timezones: ["UTC"],
          borders: ["BFA", "GHA", "GIN", "LBR", "MLI"],
          nativeName: "Côte d'Ivoire",
          numericCode: "384",
          currencies: [{
            "code": "XOF",
            "name": "West African CFA franc",
            "symbol": "Fr"
          }],
          languages: [{
            "iso639_1": "fr",
            "iso639_2": "fra",
            "name": "French",
            "nativeName": "français"
          }],
          translations: {
            "de": "Elfenbeinküste",
            "es": "Costa de Marfil",
            "fr": "Côte d'Ivoire",
            "ja": "コートジボワール",
            "it": "Costa D'Avorio",
            "br": "Costa do Marfim",
            "pt": "Costa do Marfim",
            "nl": "Ivoorkust",
            "hr": "Obala Bjelokosti",
            "fa": "ساحل عاج"
          },
          flag: "https://restcountries.eu/data/civ.svg",
          regionalBlocs: [{
            "acronym": "AU",
            "name": "African Union",
            "otherAcronyms": [],
            "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
          }],
          cioc: "CIV"
        }
        let response;
        spyOn(countryService, 'findCountryByName').and.returnValue(of(countryResponse));

        countryService.findCountryByName('ivoire').subscribe(res => {
          response = res;
        });

        expect(response).toEqual(countryResponse);
      });
    });



});

