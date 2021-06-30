import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';

import{FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { DatePipe } from '@angular/common';
import { Card } from 'src/app/Models/card';
import { RegistrationService } from 'src/app/Services/registration.service';
import { SubscribedItems } from 'src/app/Models/subscribed-items';
import { Subscriptions } from 'src/app/Models/subscriptions';
import { Transaction } from 'src/app/Models/transaction';
import { SubscriptionService } from 'src/app/Services/subscription.service';
import { CardService } from 'src/app/Services/card.service';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  card=new Card()
  subscription=new Subscriptions()
  transaction=new Transaction()
  subscribedItems=new SubscribedItems()
  planValue: number;
  plan:string;
  date:string;
  transactionDate = new Date();
  errorMsg='';
 newDate:any;
constructor(private cardService:CardService,private subscriptionService:SubscriptionService,private _fb: FormBuilder,private service:RegistrationService,private activatedroute:ActivatedRoute,private router:Router,private datePipe: DatePipe) { 
}

  ngOnInit() {
    let id=parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    this.service.setidValue(id)
    this.subscriptionService.subscriptionsbyId(id).subscribe(
      data=>{
        console.log("got the subscription data by Id");
        this.subscription=data;
       /*  this.service.setsName(this.subscription.subscriptionName)
        console.log(this.subscription.subscriptionName) */
      },
      error=>{
        console.log("Error occured")
      })
      
      console.log("new date : "+this.newDate); 
      this.planValue=this.service.getValue()
     /* console.log("payment component :  "+this.planValue) */
      this.plan=this.service.getPlantype()
      console.log("plan : "+this.plan)
      this.date = this.datePipe.transform(this.transactionDate, 'dd-MM-yyyy');
     
      /* console.log("planvalue in payment success"+this.planValue) */
     /*  console.log("transaction amount in payment success"+this.transaction.transactionAmount) */
     /*  console.log("date in payment success"+this.transaction.transactionDate) */
  
     this.cardService.getCards().subscribe(
      data=>{

        this.card=data;
        console.log("showing saved cards")
      },
      error=>{
        console.log("error in showing saved cards")
      }
    )
    }

/*  saveCard(){
    this.service.saveCardToDb(this.card).subscribe(
      data=>{
        console.log("got the card data")
      },
      error=>{
          console.log("error getting the card data")
      }
      
    )

  } */
  goToPlans(id:number){
    this.router.navigate(["/subscriptionDetails/"+id])
  }
  
gotoCardDetails(){
  this.router.navigate(["/cardDetails"]);
}
savedcards(cardId:number){
  console.log(cardId)
  this.service.setcardNum(cardId)
  /* this.service.getCardByCardNo(cardNo).subscribe(
    data=>{
      console.log("got card data by id")
    },
    error=>{
      console.log("error recieved")
    }
  ) */
}
}
