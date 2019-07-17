import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-wordsinput',
  templateUrl: './wordsinput.component.html',
  styleUrls: ['./wordsinput.component.scss'],
})
export class WordsinputComponent implements OnInit {
  public myForm: FormGroup;
  private playerCount: number = 1;

  constructor(private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({
      player1: ['', Validators.required]
    });
  }

  addControl(){
    this.playerCount++;
    this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
  }

  removeControl(control){
    this.myForm.removeControl(control.key);
  }

  ngOnInit() { }

}
