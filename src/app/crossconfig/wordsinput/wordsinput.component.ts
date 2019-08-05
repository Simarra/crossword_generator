import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { WordService } from './../../services/word-changed-emitter.service';
import { GridManagerService } from './../../services/grid-manager.service'

@Component({
  selector: 'app-wordsinput',
  templateUrl: './wordsinput.component.html',
  styleUrls: ['./wordsinput.component.scss'],
})
export class WordsinputComponent implements OnInit {
  public form: FormGroup;
  public WordDecrList: FormArray;

  // returns all form groups under contacts
  get wordDescrFormGroup() {
    return this.form.get('words') as FormArray;
  }

  constructor(private fb: FormBuilder, private wordservice: WordService, private gridmng: GridManagerService) { }

  ngOnInit() {
    this.form = this.fb.group({
      words: this.fb.array([this.createWord(null, null)])
    });
    // set contactlist to this field
    this.WordDecrList = this.form.get('words') as FormArray;
    this.removeWord(0);
    for (let word_descr of this.gridmng.grid.words.word_desc_array){
      this.WordDecrList.push(this.createWord(word_descr[0], word_descr[1]));
    
      this.wordUpdated();

    }
  }

  // contact formgroup
  createWord(wd:string | null, des:string | null): FormGroup {
    return this.fb.group({
      word: [wd, Validators.compose([Validators.required])],
      descr: [des, Validators.compose([Validators.required])]
    });
  }

  // add a contact form group
  addWordFromForm() {
    this.WordDecrList.push(this.createWord(null, null));
  }

  // remove contact from group
  removeWord(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.WordDecrList.removeAt(index);
    this.wordUpdated();
  }


  wordUpdated() {
    // Update letter and word count.
    // Then call function to emit a signal.
    let max_word_len: number = 0;
    let word_len_count: number = 0;
    for (let worddescr of this.form.value.words) {
      let word: string = worddescr.word;
      let tmp_word_len: number = word.length;
      if (tmp_word_len > max_word_len) {
        max_word_len = tmp_word_len;
      }
      word_len_count += tmp_word_len;
    };

    this.emitSignal(word_len_count, max_word_len);
  }
  ;

  private emitSignal(letter_count: number, longer_word_len: number){
    let dict_count_len: {} = {};
    dict_count_len["count"] = letter_count;
    dict_count_len["len"] = longer_word_len;
    this.wordservice.transmitLen.emit(dict_count_len);
    this.wordservice.transmitWords.emit(this.form.value.words.map(x => x.word));
    this.wordservice.transmitDescrs.emit(this.form.value.words.map(x => x.descr));
  };

}