import { Component, OnInit } from '@angular/core';
import { GridManagerService } from './../services/grid-manager.service'

@Component({
  selector: 'app-gridwidget',
  templateUrl: './gridwidget.component.html',
  styleUrls: ['./gridwidget.component.scss'],
})
export class GridwidgetComponent implements OnInit {

  get cellArray(){
    return this.gserv.grid.board;
  };

  constructor(private gserv: GridManagerService) { }

  ngOnInit() {}

}
