import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlaneSlash } from '@fortawesome/free-solid-svg-icons';
import { from, Subscription } from 'rxjs';

import{NgForm} from '@angular/forms'
import { Plans } from 'src/app/Models/plans';
import { RegistrationService } from 'src/app/Services/registration.service';
import { Subscriptions } from 'src/app/Models/subscriptions';
import { SubscriptionService } from 'src/app/Services/subscription.service';
import { PlansService } from 'src/app/Services/plans.service';

@Component({
  selector: 'app-subcription-details',
  templateUrl: './subcription-details.component.html',
  styleUrls: ['./subcription-details.component.css']
})
export class SubcriptionDetailsComponent implements OnInit {
   monthly:string="Monthly";
   threeMonths:string="3 Months"
   sixMonths:string="6 Months"
   oneYear:string="1 Year"
  plan=new Plans()
subscription=new Subscriptions();
  planValue: any;
  planType:string;
  subName:string;
  constructor(private planService:PlansService,private subscriptionService:SubscriptionService,private service:RegistrationService,private activatedroute:ActivatedRoute,private router:Router) { }
  ngOnInit(){
    let id=parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    this.subscriptionService.subscriptionsbyId(id).subscribe(
      data=>{
        console.log("got the subscription data by Id");
        this.subscription=data;
        
        
      },
      error=>{
        console.log("Error occured")
      }
    )
    /* let id1=parseInt(this.activatedroute.snapshot.paramMap.get('id')); */
    this.planService.plansbyId(id).subscribe(
      data=>{
        this.plan=data
        console.log("plans data recieved")
      },
      error=>{
        console.log("error recieved")
      }
    )
    
   /*  console.log("setting sname : "+this.subscription.subscriptionName) */
    
  }
  
  ChangeMethods(type:string){
    this.getPValue()
    this.setPlanType(type)
  }
  getPValue(){
    this.service.setValue(this.planValue);
  }
  setPlanType(type:string){
    this.service.setPlan(type)
  }



  /* sendPlanValueToPayment(){
    this.service.sendPlanValue(this.planValue)
    console.log("selected plan in subscription details :"+this.planValue)
  } */
  gotoHome(){
    this.router.navigate(["/homepage"])
  }
  gotoPayment(id:number){
    
    this.router.navigate(["subscriptionDetails/"+id+"/payment"])
  }
  callMethods(id:number){
    
    this.gotoPayment(id);
  }

}
