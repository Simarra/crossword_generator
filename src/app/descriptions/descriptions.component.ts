import { Component, OnInit } from '@angular/core';
import {GridManagerService} from './../services/grid-manager.service'

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss'],
})
export class DescriptionsComponent implements OnInit {

  constructor(private gridmngr: GridManagerService) { }

  get wordDescr() {
    return this.gridmngr.grid.words.word_desc_array;
  }
  ngOnInit() {}

}
