import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { WordService } from './../../services/word-changed-emitter.service'

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

  constructor(private fb: FormBuilder, private wordservice: WordService) { }

  ngOnInit() {
    this.form = this.fb.group({
      words: this.fb.array([this.createWord()])
    });

    // set contactlist to this field
    this.WordDecrList = this.form.get('words') as FormArray;
  }

  // contact formgroup
  createWord(): FormGroup {
    return this.fb.group({
      word: [null, Validators.compose([Validators.required])],
      descr: [null, Validators.compose([Validators.required])]
    });
  }

  // add a contact form group
  addWord() {
    this.WordDecrList.push(this.createWord());
  }

  // remove contact from group
  removeWord(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.WordDecrList.removeAt(index);
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