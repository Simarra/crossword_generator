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

  public colnumber: number = 10;
  public rownumber: number = 10;
  public cellnumber: number = 100;

  public words: Array<string>;
  public descrs: Array<string>;

  public validconfig: boolean = false;

  constructor(private wordservice: WordService, private gridrowcolchangedservice: GridRowColChangeService, private gridsizechangeservice: GridSizeChangeService,
    private gridmanagerservice: GridManagerService) { }

  ngOnInit() {
    this.wordservice.transmitLen.subscribe((data: {}) => {
      this.letter_count = data["count"];
      this.longer_word_len = data["len"];
      this.setConfigValidityBoolean();
    });
    this.gridrowcolchangedservice.gridSizeChanged.subscribe((data: {}) => {
      this.colnumber = data["colnumber"];
      this.rownumber = data["rownumber"];
      this.setConfigValidityBoolean();
    });
    this.gridsizechangeservice.gridSizeChanged.subscribe((data: number) => {
      this.cellnumber = data;
      this.setConfigValidityBoolean();
    });
    this.wordservice.transmitWords.subscribe((data: Array<string>) => {
      this.words = data;
      this.setConfigValidityBoolean();
    });
    this.wordservice.transmitDescrs.subscribe((data: Array<string>) => {
      this.descrs = data;
      this.setConfigValidityBoolean();
    });
  };

  public generateGrid(
  ) {
    // TODO: Generate a trigger to grey out the submit button.
    let grid: Grid = generate_crossword(this.words, this.descrs, this.rownumber, this.colnumber);
    this.gridmanagerservice.grid = grid;

  };

protected setConfigValidityBoolean(){
  if (
     (this.cellnumber < this.letter_count) || (
        (this.longer_word_len < this.rownumber) && (this.longer_word_len < this.colnumber) ) 
        ){
          this.validconfig = true;
        }
  else {
    this.validconfig = false;
  }
};

}
