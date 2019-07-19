import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-wordsinput',
  templateUrl: './wordsinput.component.html',
  styleUrls: ['./wordsinput.component.scss'],
})
export class WordsinputComponent implements OnInit {
  public form: FormGroup;
  public WordDecrList: FormArray;

  public letter_count: number;
  public longer_word_len: number;

  // returns all form groups under contacts
  get wordDescrFormGroup() {
    return this.form.get('words') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

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


  updateLetterCount() {
    // Update letter and word count.
    let word_len: number = 0;
    let word_len_count:number = 0;
    for (let worddescr of this.form.value.words) {
      let word:string = worddescr.word;
      let tmp_word_len:number = word.length;
      if (tmp_word_len > word_len){
        word_len = tmp_word_len;
      }
      word_len_count += tmp_word_len;
    };

    this.letter_count = word_len_count;
    this.longer_word_len = word_len;

  }
  ;

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }
}