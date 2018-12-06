
export class Country {

    name: String;
    topLevelDomain = [];
    alpha2Code: String;
    alpha3Code: String;
    callingCodes = [];
    capital: String;
    altSpellings = [];
    region: String;
    subregion: String;
    population: String;
    latlng = [];
    demonym: String;
    area: String;
    gini: String;
    timezones = [];
    borders = [];
    nativeName: String;
    numericCode: String;
    currencies = [];
    languages = [];
    translations: [];
    flag: String;
    regionalBlocs = [];
    cioc;
    public Country(name: String, topLevelDomain: [], alpha2Code: String, alpha3Code: String,
        callingCodes: [], capital: String, altSpellings: [], region: String,
        subregion: String, population: String, latlng: [], demonym: String, area: String, gini: String,
        timezones: [], borders: [], nativeName, numericCode: String,
        currencies: [], languages: [], translations: [], flag: String,
        regionalBlocs: [], cioc: []) {
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
