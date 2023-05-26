import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IFish } from './IFish';


@Injectable({
  providedIn: 'root'
})
export class FishService {
  apiUrl = environment.api;

  constructor(private http: HttpClient) {
  }

  getAllFish(): Observable<IFish[]> {
    const allFish: Observable<IFish[]> = this.http.get<IFish[]>(`${this.apiUrl}/Fish/GetAllFish`);

    return allFish;
  }
}
