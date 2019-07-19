import { Component, OnInit } from '@angular/core';
import { WordService } from './../services/word-changed-emitter.service'
import { GridRowColChangeService, GridSizeChangeService } from './../services/gridsize-changed-emitter.service'

@Component({
  selector: 'app-crossconfig',
  templateUrl: './crossconfig.page.html',
  styleUrls: ['./crossconfig.page.scss'],
})

export class CrossconfigPage implements OnInit {
  public letter_count: number;
  public longer_word_len: number;

  public colnumber: number;
  public rownumber: number;
  public cellnumber: number;

  public validconfig: boolean = false;

  constructor(private wordservice: WordService, private gridrowcolchangedservice: GridRowColChangeService, private gridsizechangeservice: GridSizeChangeService) { }

  ngOnInit() {
    this.wordservice.wordChanged.subscribe((data: {}) => {
      this.letter_count = data["count"];
      this.longer_word_len = data["len"];
    });
    this.gridrowcolchangedservice.gridSizeChanged.subscribe((data: {}) => {
      this.colnumber = data["colnumber"];
      this.rownumber = data["rownumber"];
    });
    this.gridsizechangeservice.gridSizeChanged.subscribe((data: number) => {
      this.cellnumber = data;
    });
  }

}
