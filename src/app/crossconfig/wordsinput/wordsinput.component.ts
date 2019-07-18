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

  // returns all form groups under contacts
  get wordDescrFormGroup() {
    return this.form.get('words') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

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


  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.WordDecrList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }
}