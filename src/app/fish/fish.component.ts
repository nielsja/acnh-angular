import { Component, OnInit } from '@angular/core';
import { fishShadowMap, IFish, IFishDisplay } from '../entries/fish';
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
  hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  displayHours = [0, 6, 12, 18];
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
        time: this.mapHours(fish.availability['time-array'] ?? []),
        location: this.mapLocation(fish.availability.location) ?? '',
        shadow: this.mapShadow(fish.shadow) ?? '',
      });
      // fish.availability['month-array-northern']?.sort((a, b) => a - b);
    }
  }

  getFish() {
    return this.fishService.getFish();
  }

  mapMonths(months: number[]) {
    const monthsAvailability = new Map<number, boolean>();
    for (const month of this.months) {
      monthsAvailability.set(month, months.includes(month));
    }
    return monthsAvailability;
  }

  mapHours(hours: number[]) {
    const hoursAvailability = new Map<number, boolean>();
    for (const hour of this.hours) {
      hoursAvailability.set(hour, hours.includes(hour));
    }
    return hoursAvailability;
  }

  mapLocation(location: string) {
    if (fishShadowMap.has(location)) {
      return fishShadowMap.get(location);
    }
    return location;
  }

  mapShadow(shadow: string) {
    if (fishShadowMap.has(shadow)) {
      return fishShadowMap.get(shadow);
    }
    return shadow;
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
