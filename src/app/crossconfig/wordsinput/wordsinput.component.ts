import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-wordsinput',
  templateUrl: './wordsinput.component.html',
  styleUrls: ['./wordsinput.component.scss'],
})
export class WordsinputComponent implements OnInit {
  public wordsDescrForm: FormGroup;
  public wordsCount: number = 1;

  constructor(private formBuilder: FormBuilder) {

    this.wordsDescrForm = formBuilder.group({
      word: ['', Validators.required]
    });
  }

  addControl(){
    this.wordsCount++;
    this.wordsDescrForm.addControl('word' + this.wordsCount, new FormControl('', Validators.required));
    console.log(this.wordsDescrForm.value.word);
  }

  removeControl(control){
    this.wordsDescrForm.removeControl(control.key);
  }

  ngOnInit() { }

}
