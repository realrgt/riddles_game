import { Component, OnInit } from '@angular/core';

import { RiddleService } from './riddle.service';
import { Riddle } from '../core/models/riddle';
import { map } from 'rxjs/operators';

declare var M: any;
@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss']
})
export class RiddleComponent implements OnInit {

  riddles: Riddle[]; // riddles fetched form service

  riddle1: Riddle = new Riddle(); // joker
  riddle2: Riddle = new Riddle();
  riddle3: Riddle = new Riddle();
  riddle4: Riddle = new Riddle();

  mock = [0, 1, 2, 3];


  aba = 'one';

  constructor(private riddleService: RiddleService) {}

  ngOnInit() {

    const elem = document.querySelector('.tabs');
    const options = {
      duration: 500
    };
    M.Tabs.init(elem, options);

    this.riddleService
      .listRiddles()
      .pipe(
        map(docs => {
          const counts = [];
          for (let i = 0; i <= 3; i++) {
            const c = Math.floor(Math.random() * (437 - 0 + 1)) + 0;
            counts[i] = docs[c];
          }
          return (docs = counts);
        })
      )
      .subscribe(async docs => {
        this.riddles = docs;
        console.log(this.riddles);
        this.riddle1 = this.riddles[0]; // joker
        this.riddle2 = this.riddles[1];
        this.riddle3 = this.riddles[2];
        this.riddle4 = this.riddles[3];
        this.mock.sort(() => Math.random() - 0.5);
        console.log();

      });

  }

  verify(riddle: Riddle) {
    console.log(riddle);
    if (riddle.id === this.riddles[this.mock[3]].id) {
      alert('Correct answer');
    } else {
      alert('Wrong answer');
      // this.ngOnInit();
    }
  }

  // getCalcRiddles(allRiddles: Riddle[]) {
  //   const counts = [];
  //   for (let i = 0; i <= 3; i++) {
  //     const c = this.randomInt(0, 437);
  //     counts[i] = allRiddles[c];
  //   }
  //   // this.riddles = counts;
  //   console.log(counts);
  //   return counts;
  // }

  // randomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // mock.sort(() => Math.random() - 0.5);

}
