import { Component, OnInit } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { GridRowColChangeService, GridSizeChangeService }  from './../../services/gridsize-changed-emitter.service'

@Component({
  selector: 'app-gridsizer',
  templateUrl: './gridsizer.component.html',
  styleUrls: ['./gridsizer.component.scss'],
})
export class GridsizerComponent implements OnInit {
  public colnumber: number = 10;
  public rownumber: number = 10;

  constructor(private gridrowchangedservice:GridRowColChangeService, private gridsizechangedservice: GridSizeChangeService) { }

  ngOnInit() {}


  public rangeChange() {
    let grid_size:number = this.get_grid_size(this.colnumber, this.rownumber);
    this.emitRowColSignal();
    this.emitSizeSignal(grid_size);
    
  } 

  protected get_grid_size(cols: number, rows: number){
    let res = cols * rows;
    let grid_size:number = res;
    return grid_size;
  };

  private emitRowColSignal(){
    let dict_col_row: {} = {};
    dict_col_row["colnumber"] = this.colnumber;
    dict_col_row["rownumber"] = this.rownumber;
    this.gridrowchangedservice.gridSizeChanged.emit(dict_col_row);
  };

  private emitSizeSignal(grid_size:number){
    this.gridsizechangedservice.gridSizeChanged.emit(grid_size);

  }
}
