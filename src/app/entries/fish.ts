import { IAvailability, IName } from './interfaces';

export interface IFishDisplay {
  id: number;
  name: string;
  imageUrl: string;
  monthsNorthern: Map<number, boolean>;
  time: Map<number, boolean>;
  location: string;
  shadow: string;
  // availability: {
  //   location: string;
  //   rarity: string;
  //   months: {
  //     northern: Map<number, boolean>;
  //     southern: Map<number, boolean>;
  //   };
  //   time: Map<number, boolean>;
  // };
}

export interface IFish {
  id: number;
  'file-name': string;
  name: IName;
  availability: IAvailability;
  shadow: string;
  price: number;
  'price-cj': number;
  'catch-phrase': string;
  'museum-phrase': string;
  'alt-catch-phrase'?: string[];
  image_uri: string;
  icon_uri: string;
}

export type FishShadow =
  | 'Smallest (1)'
  | 'Small (2)'
  | 'Medium (3)'
  | 'Medium (4)'
  | 'Medium with fin (4)'
  | 'Large (5)'
  | 'Largest (6)'
  | 'Largest with fin (6)'
  | 'Narrow';

export enum EFishShadow {
  Tiny = 'Smallest (1)',
  Xsmall = 'Small (2)',
  Small = 'Medium (3)',
  Medium = 'Medium (4)',
  MediumFinned = 'Medium with fin (4)',
  Large = 'Large (5)',
  Huge = 'Largest (6)',
  HugeFinned = 'Largest with fin (6)',
  Narrow = 'Narrow',
}

export const fishShadowMap = new Map<string, string>([
  [EFishShadow.Tiny, 'Tiny'],
  [EFishShadow.Xsmall, 'X-small'],
  [EFishShadow.Small, 'Small'],
  [EFishShadow.Medium, 'Medium'],
  [EFishShadow.MediumFinned, 'Medium (finned)'],
  [EFishShadow.Large, 'Large'],
  [EFishShadow.Huge, 'Huge'],
  [EFishShadow.HugeFinned, 'Huge (finned)'],
  [EFishShadow.Narrow, 'Narrow'],
]);

export type FishRarity = 'Common' | 'Uncommon' | 'Rare' | 'Ultra-rare';

export enum EFishRarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  UltraRare = 'Ultra-rare',
}

export type FishLocation =
  | 'River'
  | 'River (Clifftop)'
  | 'River (Mouth)'
  | 'Pond'
  | 'River (Clifftop) & Pond'
  | 'Pier'
  | 'Sea'
  | 'Sea (when raining or snowing)';

export enum EFishLocation {
  River = 'River',
  RiverClifftop = 'River (Clifftop)',
  RiverMouth = 'River (Mouth)',
  Pond = 'Pond',
  RiverClifftopPond = 'River (Clifftop) & Pond',
  Pier = 'Pier',
  Sea = 'Sea',
  SeaPrecipitation = 'Sea (when raining or snowing)',
}

export const fishLocationMap = new Map<string, string>([
  [EFishLocation.River, 'River'],
  [EFishLocation.RiverClifftop, 'River (Clifftop)'],
  [EFishLocation.RiverMouth, 'River (Mouth)'],
  [EFishLocation.Pond, 'Pond'],
  [EFishLocation.RiverClifftopPond, 'River (Clifftop) & Pond'],
  [EFishLocation.Pier, 'Pier'],
  [EFishLocation.Sea, 'Sea'],
  [EFishLocation.SeaPrecipitation, 'Sea (when raining or snowing)'],
]);
