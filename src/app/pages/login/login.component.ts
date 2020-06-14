import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
import {User} from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private router :Router,private loginService:LoginService) {}
  login:any;
  password:any;
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  register(event:any){
   this.router.navigate(['/register']);
  }
  signIn(event:any){
  this.loginService.validateCridentials(this.login,this.password).subscribe(response=>{

    if(response){
      localStorage.setItem('user', this.login);
      this.router.navigate(['/dashboard']);

    }
    }
  )
}

}
