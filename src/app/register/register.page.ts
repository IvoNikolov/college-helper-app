import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private language: LanguageService) { }

  currentLanguage: string;

  ngOnInit() {
    this.currentLanguage = this.language.selected;
  }

  switchLanguage(lng) {
    this.currentLanguage = lng;
    this.language.setLanguage(lng);
  }

}
