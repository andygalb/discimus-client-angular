import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import {UserService} from '../user.service';
import {User} from '../models/modelInterfaces';
import {RUser} from '../models/modelClasses';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  user:User;
  tempUser:User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.tempUser=new RUser();
    this.tempUser.local= {
      userType: '',
      firstName: '',
      username: '',
      password: '',
      lastName: '',
      email: '',
      admin: false,
      organisation:'',
      location:'',
      meta: {
        age:0,
        website:''
      }
    }
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(['user']);
    }
    else {
      alert('Invalid credentials');
    }
  }

  doLogIn(): void {
    console.log("Logging in");
    this.tempUser.local.username=this.username;
    this.tempUser.local.password=this.password;
    this.userService.loginUser(this.tempUser).subscribe(
      data => {
        console.log("This is what was returned in data:")
        console.log("Token:" + data["token"]);

        console.log(data);
        let user = data["user"];
        if(user.local.username!=null) {
          this.userService.initiateUser(user);
          this.userService.isUserLoggedIn = true;
          console.log(this.userService.user);
          this.tempUser=null;
          if(this.userService.user.local.userType=="admin") {this.router.navigate(['admin']);}
          if(this.userService.user.local.userType=="teacher") {this.router.navigate(['teacher']);}
          if(this.userService.user.local.userType=="student") {this.router.navigate(['student']);}
        };
      }
      ,
      err => {
        console.error("Error logging in!");
        alert("Could not log in");
        return
      },
      () => {
      }
    );

  }



}
