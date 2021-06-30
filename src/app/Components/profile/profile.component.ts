import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public firstname=sessionStorage.getItem('firstname')
  public lastname=sessionStorage.getItem('lastname')
  public password=sessionStorage.getItem('password')
  public email=this.authService.getLoggedInUserEmail();
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  gotoHome(){
    this.router.navigate(["/homepage"])
  }
}
