import { Injectable } from '@angular/core';
import { generate_crossword } from 'ts_crossword'

@Injectable({
  providedIn: 'root'
})
export class GridManagerService {
  grid: any;

  constructor(){
    this.grid = generate_crossword;
  }
}
