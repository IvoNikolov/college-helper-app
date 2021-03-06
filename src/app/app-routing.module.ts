import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'list', canActivate : [AuthGuardService], loadChildren: './list/list.module#ListPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'products-list', loadChildren: './products-list/products-list.module#ProductsListPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'fests', loadChildren: './fests/fests.module#FestsPageModule' },
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderPageModule' },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule' },
  { path: 'add-friend', loadChildren: './friends/add-friend/add-friend.module#AddFriendPageModule' },
  { path: 'places', loadChildren: './places/places.module#PlacesPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
