import { Injectable } from '@angular/core';
import { generate_crossword, Grid, WordListDescr} from 'ts_crossword'

@Injectable({
  providedIn: 'root'
})
export class GridManagerService {
  grid: Grid;
  word_descr: WordListDescr;


  constructor(){
    // this.grid = generate_crossword([''], ['lo'], 3, 3); // Gen empty grid at init.
  };

  public JsonArrayWithIdx() {
    if (this.grid){
      return this.grid.get_array_of_items("idx");
    }
  };
}
