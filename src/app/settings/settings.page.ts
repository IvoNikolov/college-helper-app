import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    showThemeOptions = false;

    constructor(private theme: ThemeService) {}

    ngOnInit() {
    }

    changeTheme(name) {
      this.theme.setTheme(name);
    }

    onShowDetails() {
      this.showThemeOptions = !this.showThemeOptions;
    }

}
