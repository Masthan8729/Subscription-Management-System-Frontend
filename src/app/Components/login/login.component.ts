import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/Services/registration.service';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
   msg='';
  constructor( private _service:UserService , private _router:Router ) { }
 
  ngOnInit(){
    sessionStorage.removeItem('authenticatedUser')
  }
   userLogin(){ this._service.userLoginFromRemote(this.user).subscribe(
    data=>{
      sessionStorage.setItem('authenticatedUser',data.email);
      sessionStorage.setItem('firstname',data.firstName)
      sessionStorage.setItem('lastname',data.lastName)
      sessionStorage.setItem('password',data.password)
      /* this.user=data; */
       this._router.navigate(["/homepage"]) ;  
    },
    error=>{
      this.msg="Please Enter valid details";
    console.log("error recieved");
    }
    
  )   

}
}
