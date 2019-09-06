import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, take } from 'rxjs/operators';

import { Riddle } from '../core/models/riddle';

@Injectable({
  providedIn: 'root'
})
export class RiddleService {

  constructor(private http: HttpClient) {}

  listRiddles() {
    return this.http.get<Riddle[]>('assets/riddles.json')
      .pipe(
        take(1),
        tap(console.log)
      );
  }

}
