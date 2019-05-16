import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {UserService} from '../user.service';
import {IUser} from '../models/modelInterfaces';
import {User} from '../models/modelClasses';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  loginFeedback: string;

  user: IUser;
  tempUser: IUser;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {

    // Is the user already logged in? Then take the user to his/her landing page straight away.
    if (this.userService.isUserLoggedIn) {
      this.router.navigate(['home']);
      return;
    }

    this.tempUser = new User();

    this.tempUser.local = {
      userType: '',
      firstName: '',
      username: '',
      password: '',
      lastName: '',
      email: '',
      admin: false,
      organisation: '',
      location: '',
      meta: {
        age: 0,
        website: ''
      }
    };
  }


  doLogIn(): void {
    console.log('Logging in');
    this.tempUser.local.username = this.username;
    this.tempUser.local.password = this.password;
    this.userService.loginUser(this.tempUser).subscribe(
      data => {
        console.log('This is what was returned in data:');
        console.log('Token:' + data['token']);
        this.loginFeedback = data['message'].message;
        console.log(data);

        const token = data['token'];
        const success = data['success'];

        if (success !== true) {
          return;
        }
        if (token !== '') {
          localStorage.setItem('token', token);
        }

        const user = data['user'];

        if (user.local.username != null) {

          this.userService.initiateUser(user);
          this.userService.isUserLoggedIn = true;

          localStorage.setItem('user', JSON.stringify(user));
          console.log(this.userService.user);
          this.tempUser = null;
          this.router.navigate(['home']);
        }
      }
      ,
      err => {
        console.error('Error logging in!');
        alert('Could not log in');
        return;
      },
      () => {
      }
    );

  }


}
