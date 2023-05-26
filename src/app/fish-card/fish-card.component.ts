import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FishService } from '../fish/fish.service';
import { IFish } from '../fish/IFish';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.scss']
})
export class FishCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
