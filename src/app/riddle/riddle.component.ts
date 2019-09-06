import { Component, OnInit } from '@angular/core';
import { RiddleService } from './riddle.service';
import { Riddle } from '../core/models/riddle';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss']
})
export class RiddleComponent implements OnInit {

  riddles: Riddle[];

  constructor(private riddleService: RiddleService) { }

  ngOnInit() {
    this.riddleService.listRiddles()
      .subscribe(riddles => this.riddles = riddles);
  }

}
