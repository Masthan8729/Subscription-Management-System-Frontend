import { Component, OnInit } from '@angular/core';


import{NgForm} from '@angular/forms'

import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { data } from 'jquery';
import { Transaction } from 'src/app/Models/transaction';
import { Card } from 'src/app/Models/card';
import { RegistrationService } from 'src/app/Services/registration.service';
import { SubscribedItems } from 'src/app/Models/subscribed-items';
import { Subscriptions } from 'src/app/Models/subscriptions';
import { User } from 'src/app/Models/user';
import { CardService } from 'src/app/Services/card.service';
import { SubscriptionService } from 'src/app/Services/subscription.service';
import { UserService } from 'src/app/Services/user.service';
import { SubscribedItemsService } from 'src/app/Services/subscribed-items.service';
import { TransactionService } from 'src/app/Services/transaction.service';

import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  user=new User()
  card=new Card()
  subscription=new Subscriptions()
  transaction=new Transaction()
  subscribedItems=new SubscribedItems()
  planValue: number;
  plan:string;
  date:string;
  transactionDate = new Date();
  errorMsg='';
  cardId:number;
  newDate:any;
  formattedDate:any;
  constructor(private location: PlatformLocation,private service:RegistrationService, private cardService:CardService,private subscriptionService:SubscriptionService,private userService:UserService,private subscribedItemService:SubscribedItemsService,private transactionService:TransactionService,private datePipe:DatePipe,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.location.onPopState(() => {
      console.log("pessed back");
      //this.router.navigateByUrl(‘/multicomponent’);
      //history.forward();
      });
    this.cardId=this.service.getcardNum()
    console.log("card no in demo component : "+this.cardId)
    this.cardService.getCardByCardNo(this.cardId).subscribe(
      data=>{
        this.card=data
        console.log("setting card details in card form")
      },
      error=>{
        console.log("error setting card details in card form")
      }
    )
    let id=this.service.getidValue()
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
    this.planValue=this.service.getValue()
     /* console.log("payment component :  "+this.planValue) */
      this.plan=this.service.getPlantype()
      this.date = this.datePipe.transform(this.transactionDate, 'dd-MM-yyyy');
      
      this.userService.getUserByEmail(sessionStorage.getItem('authenticatedUser')).subscribe(
        data=>{
          this.user=data;
          console.log(data)
          console.log("user data by email recieved")
        
      });
    }
  saveCard(){
    this.cardService.saveCardToDb(this.card).subscribe(
      data=>{
        console.log("got the card data")
      },
      error=>{
          console.log("error getting the card data")
      }
      
    )
      
  }
  paymentSuccess(){
    
    /*  this.service.setTransactionItem(this.subscription.subscriptionName) */
     
     this.subscribedItems.subscribedItemName=this.subscription.subscriptionName
     this.subscribedItems.subscribedItemType=this.subscription.subscriptionType
     this.subscribedItems.subscribedItemPlan=this.plan;
     this.subscribedItemService.saveSubscribedItems(this.subscribedItems).subscribe(
       data=>{
         var i=1
          this.service.setloopValue(i)
           console.log("got subscribed items data")
           this.savetransaction()
       },
       error=>{
         this.errorMsg="You have already subscribed "+this.subscribedItems.subscribedItemName
         console.log("error setting the subscribed items data")
       }
     )
     
 }
 public savetransaction(){
  if(this.plan=="Monthly"){
    this.transactionDate.setMonth(this.transactionDate.getMonth()+1);
    this.newDate=this.transactionDate.toISOString().slice(0,10);
    this.formattedDate= this.datePipe.transform(this.newDate, 'dd-MM-yyyy');
    this.transaction.planEndDate=this.formattedDate;
  }
  if(this.plan=="3 Months"){
    this.transactionDate.setMonth(this.transactionDate.getMonth()+3);
    this.newDate=this.transactionDate.toISOString().slice(0,10);
    this.formattedDate= this.datePipe.transform(this.newDate, 'dd-MM-yyyy');
    this.transaction.planEndDate=this.formattedDate;
  }
  if(this.plan=="6 Months"){
    this.transactionDate.setMonth(this.transactionDate.getMonth()+6);
    this.newDate=this.transactionDate.toISOString().slice(0,10);
    this.formattedDate= this.datePipe.transform(this.newDate, 'dd-MM-yyyy');
    this.transaction.planEndDate=this.formattedDate;
  }
  if(this.plan=="1 Year"){
    this.transactionDate.setMonth(this.transactionDate.getMonth()+12);
    this.newDate=this.transactionDate.toISOString().slice(0,10);
    this.formattedDate= this.datePipe.transform(this.newDate, 'dd-MM-yyyy');
    this.transaction.planEndDate=this.formattedDate;
  }
   this.transaction.transactionItem=this.subscription.subscriptionName
     this.transaction.transactionAmount=this.planValue;
     this.transaction.plan=this.plan
     this.transaction.transactionDate=this.date;
    /*  console.log(this.transaction) */
    
     this.transactionService.saveTransaction(this.transaction).subscribe(
       data=>{
        console.log("transaction data recieved")
       },
       error=>{
         console.log("error setting the transaction data")
       }
     )
     this.router.navigate(["/paymentSuccess"]);
 }
 
}
