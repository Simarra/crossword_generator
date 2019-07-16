import { Component, OnInit } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-gridsizer',
  templateUrl: './gridsizer.component.html',
  styleUrls: ['./gridsizer.component.scss'],
})
export class GridsizerComponent implements OnInit {
  private goalProgress: number = 0;
  private myval: number = 10;

  constructor() { }

  ngOnInit() {}

  // get_grid_size(): void {
    
  // };

  rangeChange() {
    this.goalProgress++;
    console.log(this.goalProgress);
    console.log(this.myval)
  } 

}
