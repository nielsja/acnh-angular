import { Injectable } from '@angular/core';
import { IFish } from './entries/fish';
import fish from './entries/fish.json';

@Injectable({
  providedIn: 'root',
})
export class FishService {
  constructor() {}

  getFish(): IFish[] {
    return fish;
  }
}
