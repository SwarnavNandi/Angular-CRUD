import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: {[key: string]: any};
  constructor(private _user: UserService) { }
  
  ngOnInit() {
  }
  getUserData() {
    this._user.getUserDataFromServer().subscribe(
      userResponse => this.users = userResponse
    )
  }
  saveData(value1: string, value2: string) {
    this._user.postDataToServer({'key1': value1, 'key2': value2}).subscribe(
      saveResponse => console.log(saveResponse)
    )
  }

}
