import { Component, OnInit } from '@angular/core';

import{NgForm} from '@angular/forms'
import { User } from 'src/app/Models/user';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  user=new User();
  constructor() { }

  ngOnInit(): void {
  }

}
