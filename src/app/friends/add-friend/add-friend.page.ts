import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {

  friendForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  initForm() {
    this.friendForm = new FormGroup({
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required)
  });
  }

}
