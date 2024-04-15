type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Languages = {
  [key: string]: string;
};

type Translations = {
  [key: string]: {
    official: string;
    common: string;
  };
};

type Demonyms = {
  [key: string]: {
    f: string;
    m: string;
  };
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Gini = {
  [key: string]: number;
};

type Car = {
  signs: string[];
  side: string;
};

type Flags = {
  png: string;
  svg: string;
  alt: string;
};

type CoatOfArms = {
  png: string;
  svg: string;
};

type CapitalInfo = {
  latlng: number[];
};

type PostalCode = {
  format: string;
  regex: string;
};

export type Country = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};
