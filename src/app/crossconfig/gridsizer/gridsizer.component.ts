import { Component, OnInit } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-gridsizer',
  templateUrl: './gridsizer.component.html',
  styleUrls: ['./gridsizer.component.scss'],
})
export class GridsizerComponent implements OnInit {
  public colnumber: number = 10;
  public rownumber: number = 10;
  public grid_size: number = 100;

  constructor() { }

  ngOnInit() {}


  rangeChange() {
    this.set_grid_size(this.colnumber, this.rownumber);
  } 

  protected set_grid_size(cols: number, rows: number){
    let res = cols * rows;
    this.grid_size = res;
  };
}
