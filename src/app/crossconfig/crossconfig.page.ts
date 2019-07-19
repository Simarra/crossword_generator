import { Component, OnInit } from '@angular/core';
import { WordService } from './../services/word-changed-emitter.service'

@Component({
  selector: 'app-crossconfig',
  templateUrl: './crossconfig.page.html',
  styleUrls: ['./crossconfig.page.scss'],
})

export class CrossconfigPage implements OnInit {
  public letter_count: number;
  public longer_word_len: number;

  constructor(private wordservice: WordService) { }

  ngOnInit() {
    this.wordservice.wordChanged.subscribe((data) => {
      this.letter_count = data["count"];
      this.longer_word_len = data["len"];
    })
  }

}
