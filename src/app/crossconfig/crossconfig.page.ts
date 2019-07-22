import { Component, OnInit } from '@angular/core';
import { WordService } from './../services/word-changed-emitter.service'
import { GridRowColChangeService, GridSizeChangeService } from './../services/gridsize-changed-emitter.service';
import { GridManagerService } from './../services/grid-manager.service';
import { generate_crossword, Grid } from 'ts_crossword';

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

  public words: Array<string>;
  public descrs: Array<string>;

  public validconfig: boolean = false;

  constructor(private wordservice: WordService, private gridrowcolchangedservice: GridRowColChangeService, private gridsizechangeservice: GridSizeChangeService,
    private gridmanagerservice: GridManagerService) { }

  ngOnInit() {
    this.wordservice.transmitLen.subscribe((data: {}) => {
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
    this.wordservice.transmitWords.subscribe((data: Array<string>) => {
      this.words = data;
    });
    this.wordservice.transmitDescrs.subscribe((data: Array<string>) => {
      this.descrs = data;
    });
  };

  public generateGrid(
  ) {
    let grid: Grid = generate_crossword(this.words, this.descrs, this.rownumber, this.colnumber);
    this.gridmanagerservice.grid = grid;

  };

}
