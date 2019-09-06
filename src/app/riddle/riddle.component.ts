import { Component, OnInit, ElementRef } from '@angular/core';

import { RiddleService } from './riddle.service';
import { Riddle } from '../core/models/riddle';

declare var M: any;
@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss']
})
export class RiddleComponent implements OnInit {
  riddles: Riddle[];

  constructor(private riddleService: RiddleService) {}

  ngOnInit() {
    this.riddleService
      .listRiddles()
      .subscribe(riddles => (this.riddles = riddles));

    const elem = document.querySelector('.tabs');
    const options = {};
    M.Tabs.init(elem, options);
  }
}
