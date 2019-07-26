import { Component, OnInit } from '@angular/core';
import { GridManagerService } from './../../services/grid-manager.service'

@Component({
  selector: 'app-gridcorrwidget',
  templateUrl: './gridcorrwidget.component.html',
  styleUrls: ['./gridcorrwidget.component.scss'],
})
export class GridcorrwidgetComponent implements OnInit {

  get cellsArray() {
    return this.gserv.grid.board;
  }

  constructor(private gserv: GridManagerService) { }

  ngOnInit() {}

}
