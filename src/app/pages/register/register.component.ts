import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {User} from '../user.model';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private toastr: ToastrService,private router :Router,private loginService:LoginService) { }
  user:User={} as User;
  ngOnInit() {
  }
  createAccount(event:any){
this.loginService.saveUser(this.user).subscribe(response=>{
   if(response){
     this.toastr.success('operation success', '');
   }
}, error => {
  this.toastr.error('operation failed', '');
  console.log(error);
});
  }
  login(event:any){

      this.router.navigate(['/login']);

  }

}
