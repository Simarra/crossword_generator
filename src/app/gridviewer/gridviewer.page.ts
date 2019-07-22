import { Component, OnInit } from '@angular/core';
import { GridManagerService } from './../services/grid-manager.service'

@Component({
  selector: 'app-gridviewer',
  templateUrl: './gridviewer.page.html',
  styleUrls: ['./gridviewer.page.scss'],
})
export class GridviewerPage implements OnInit {

  constructor(gridmanagerservice: GridManagerService) { }

  ngOnInit() {
  }

}
