import { User } from 'src/app/models/user';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginModel = new User('','');

  onSubmit(){
    console.log(this.loginModel)

    this.loginService.login(this.loginModel).subscribe( (response)=>{
      console.log(response)
    })
  }

  userModel = new User("", "")

  onSubit(){
    console.log(this.userModel)
  }

}
