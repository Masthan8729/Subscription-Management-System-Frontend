import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/Services/registration.service';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user=new User();
   msg='';
  constructor(private userService:UserService, private _service:RegistrationService , private _router:Router ) { }
 
  ngOnInit() {
    sessionStorage.removeItem('authenticatedUser')
  }
  registeredUser(){ 
     this.userService.registerUserFromRemote(this.user).subscribe(
    data=>{
      this.user=data
      console.log("data recieved");
      this._router.navigate(["/login"]) ;  
    },
    error=>{
      this.msg="User with Email Id "+this.user.email+" already exist";
      console.log("error recieved");
    }
  )   

}
}
