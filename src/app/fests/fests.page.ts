import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fests',
  templateUrl: './fests.page.html',
  styleUrls: ['./fests.page.scss'],
})
export class FestsPage implements OnInit {

  fests = [];
  currentDate = new Date();

  constructor() { }

  ngOnInit() {
    console.log(this.currentDate.getDate(), this.currentDate.getDay(), this.currentDate.getMonth());
  }

}
