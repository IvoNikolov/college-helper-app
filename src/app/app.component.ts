import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LanguageService } from './services/language.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'User',
      url: '/user',
      icon: 'person'
    },
    {
      title: 'Fests',
      url: '/fests',
      icon: 'calendar'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'exit'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private languageService: LanguageService,
    private authService: AuthenticationService,
    private router: Router,
    private theme: ThemeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.theme.setTheme('default');
      this.authService.authenticationState.subscribe(state => {
        if (state) {
            this.router.navigate(['home']);
        } else {
            this.router.navigate(['']);
        }
      });
      this.languageService.setInitialAppLanguage();
    });
  }

  logout(title: string) {
    if (title === 'Logout') {
        this.authService.logout();
    }
  }
}
