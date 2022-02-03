import { Component, OnInit } from '@angular/core';
import { IFish } from '../entries/fish';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
})
export class FishComponent implements OnInit {
  allFish: IFish[] = [];
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor(private fishService: FishService) {}

  ngOnInit(): void {
    this.allFish = this.getFish();
    for (const fish of this.allFish) {
      fish.availability['month-array-northern']?.sort((a, b) => a - b);
    }
  }

  getFish() {
    return this.fishService.getFish();
  }
}
