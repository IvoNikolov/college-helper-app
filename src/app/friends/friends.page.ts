import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss']
})
export class FriendsPage implements OnInit {
  friendsArray = [
    {
      name: 'Daniel',
      birthdayDay: '12',
      birthdayMonth: '5'
    },
    {
      name: 'Susan',
      birthdayDay: '2',
      birthdayMonth: '3'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
