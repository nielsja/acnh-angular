import { Component, OnInit } from '@angular/core';
import { IFish, IFishDisplay } from '../entries/fish';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
})
export class FishComponent implements OnInit {
  apiFish: IFish[] = [];
  displayFish: IFishDisplay[] = [];

  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  displayMonthsMap = new Map<number, string>([
    [1, 'Jan'],
    [2, 'Feb'],
    [3, 'Mar'],
    [4, 'Apr'],
    [5, 'May'],
    [6, 'Jun'],
    [7, 'Jul'],
    [8, 'Aug'],
    [9, 'Sep'],
    [10, 'Oct'],
    [11, 'Nov'],
    [12, 'Dec'],
  ]);

  constructor(private fishService: FishService) {}

  ngOnInit(): void {
    this.apiFish = this.getFish();
    for (const fish of this.apiFish) {
      this.displayFish.push({
        id: fish.id,
        name: fish.name['name-USen'],
        imageUrl: fish.icon_uri,
        monthsNorthern: this.mapMonths(
          fish.availability['month-array-northern'] ?? []
        ),
      });
      // fish.availability['month-array-northern']?.sort((a, b) => a - b);
    }
  }

  getFish() {
    return this.fishService.getFish();
  }

  mapMonths(months: number[]) {
    const monthsAvailability = new Map<number, boolean>();
    for (let i = 1; i < 13; i++) {
      monthsAvailability.set(i, months.includes(i));
    }
    return monthsAvailability;
  }

  getMonths() {
    const months = new Map<number, monthsEnum>([[1, monthsEnum.Jan]]);
  }
}

enum monthsEnum {
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
}
