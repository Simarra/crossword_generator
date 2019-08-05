import { Injectable } from '@angular/core';
import { generate_crossword, Grid, WordListDescr} from 'ts_crossword'

@Injectable({
  providedIn: 'root'
})
export class GridManagerService {
  grid: Grid;
  word_descr: WordListDescr;


  constructor(){
    this.grid = generate_crossword(['Mot'], ['Description'], 10, 10); // Gen empty grid at init.
  };

}
