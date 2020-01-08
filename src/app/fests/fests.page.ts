import { Component, OnInit } from '@angular/core';
import { Fest } from '../models/fest.model';

@Component({
  selector: 'app-fests',
  templateUrl: './fests.page.html',
  styleUrls: ['./fests.page.scss'],
})
export class FestsPage implements OnInit {

  fests: Fest[];
  currentDate = new Date();

  constructor() { }

  ngOnInit() {

    console.log(this.currentDate.getDate(), this.currentDate.getDay(), this.currentDate.getMonth());
  }

}
