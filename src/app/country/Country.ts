
export class Country {

  name: String;
  topLevelDomain: String[];
  alpha2Code: String;
  alpha3Code: String;
  callingCodes: String[];
  capital: String;
  altSpellings: String[];
  region: String;
  subregion: String;
  population: String;
  latlng: String[];
  demonym: String;
  area: String;
  gini: String;
  timezones: String[];
  borders: String[];
  nativeName: String;
  numericCode: String;
  currencies: Currencies[];
  languages: Languages[];
  translations: String[];
  flag: String;
  regionalBlocs: RegionalBlocs[];
  cioc: String[];

  public Country(name: String, topLevelDomain: String[], alpha2Code: String, alpha3Code: String,
                 callingCodes: String[], capital: String, altSpellings: String[], region: String,
                 subregion: String, population: String, latlng: [], demonym: String, area: String, gini: String,
                 timezones: String[], borders: String[], nativeName: String, numericCode: String,
                 currencies: Currencies[], languages: Languages[], translations: String[], flag: String,
                 regionalBlocs: RegionalBlocs[], cioc: String[]) {
    this.name = name;
    this.topLevelDomain = topLevelDomain;
    this.alpha2Code = alpha2Code;
    this.alpha3Code = alpha3Code;
    this.callingCodes = callingCodes;
    this.capital = capital;
    this.altSpellings = altSpellings;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.latlng = latlng;
    this.demonym = demonym;
    this.area = area;
    this.gini = gini;
    this.timezones = timezones;
    this.borders = borders;
    this.nativeName = nativeName;
    this.numericCode = numericCode;
    this.currencies = currencies;
    this.languages = languages;
    this.translations = translations;
    this.flag = flag;
    this.regionalBlocs = regionalBlocs;
    this.cioc = cioc;
  }
}

  export class Languages {
    iso639_1: String;
    iso639_2: String;
    name: String;
    nativeName: String;
}

export class Currencies {
  code: String;
  name: String;
}
export class RegionalBlocs {
  acronym: String;
  name: String;
}
