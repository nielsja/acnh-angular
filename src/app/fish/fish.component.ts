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

  constructor(private fishService: FishService) {}

  ngOnInit(): void {
    this.allFish = this.getFish();
  }

  getFish() {
    return this.fishService.getFish();
  }
}
