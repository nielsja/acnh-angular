export interface IName {
  'name-USen': string;
  'name-EUen': string;
  'name-EUde': string;
  'name-EUes': string;
  'name-USes': string;
  'name-EUfr': string;
  'name-USfr': string;
  'name-EUit': string;
  'name-EUnl': string;
  'name-CNzh': string;
  'name-TWzh': string;
  'name-JPja': string;
  'name-KRko': string;
  'name-EUru': string;
}

export interface IAvailability {
  isAllDay: boolean;
  isAllYear: boolean;
  location: string;
  rarity: string;
  'month-northern'?: string;
  'month-southern'?: string;
  time?: string;
  'month-array-northern'?: number[];
  'month-array-southern'?: number[];
  'time-array'?: number[];
}
