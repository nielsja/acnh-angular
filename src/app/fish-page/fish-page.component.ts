import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { FishService } from '../fish/fish.service';
import { IFish } from '../fish/IFish';

@Component({
  selector: 'app-fish-page',
  templateUrl: './fish-page.component.html',
  styleUrls: ['./fish-page.component.scss']
})
export class FishPageComponent implements OnInit, OnDestroy {
  allFish$!: Observable<IFish[]>;
  // allFish: IFish[] = [];
  // allFishSub: Subscription = new Subscription();
  constructor(private fishService: FishService) {
  }

  ngOnInit(): void {
    this.allFish$ = this.fishService.getAllFish();

  }

  ngOnDestroy(): void {
  }

}
