import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

  
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService:AuthenticationService, private _router:Router) { }

  ngOnInit(){
    this.logoutService.logout()
    this._router.navigate(["/login"])
  }

}
