import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import { SubscribedItems } from 'src/app/Models/subscribed-items';
import { Subscriptions } from 'src/app/Models/subscriptions';
import { Transaction } from 'src/app/Models/transaction';
import { CardService } from 'src/app/Services/card.service';
import { SubscriptionService } from 'src/app/Services/subscription.service';
import { UserService } from 'src/app/Services/user.service';
import { SubscribedItemsService } from 'src/app/Services/subscribed-items.service';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
subscriptions=new Subscriptions()
subscribedItems=new SubscribedItems()
transactions=new Transaction();
public email=this.authService.getLoggedInUserEmail();
checkDate: string[];
transactionByDate=new Transaction()
transactionBy=new Transaction()
transactionDate=new Transaction()
tItem=new Transaction()
  transactionItem:string;
  values:Array<string>=[];
  item:Array<string>=[];
  itemName:Array<string>=[];
  id:Array<number>=[];
  ans:any;
  days:any;
  curDay:any;
  testDate:any;
 l:number=1;


  constructor(
     private service:RegistrationService,
     private cardService:CardService,
     private subscriptionService:SubscriptionService,
     private userService:UserService,
     private subscribedItemService:SubscribedItemsService,
     private transactionService:TransactionService,
     private authService:AuthenticationService,
     private router:Router
     ) { }

  ngOnInit() {
     this.subscriptionService.subscriptionsFromremote().subscribe(
       data=>{
         this.subscriptions=data
          console.log("data recieved")
       },
       error=>console.log("error recieved")
     )
    
    this.subscribedItemService.getSubscribedItems().subscribe(
      data=>{
        this.subscribedItems=data;
        console.log(this.subscribedItems)
        console.log("showing subscribed items")
      },
      error=>{
        console.log("error showing subscribed items")
      })
    
  
      this.transactionService.getTransactions().subscribe(
        data=>{
          this.transactions=data 
          var objectLength = Object.keys(this.transactions).length;
          console.log(objectLength)
          console.log("got the transaction data") 
          for(var i=0;i<objectLength;i++)
          { 
            this.values.push(this.transactions[i].planEndDate)
          }  
          console.log(this.values)
            this.values.forEach(value=>{ 
               var newdate = value.split("-").join("/");
               var datearray = newdate.split("/");
               var finaldate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
              var planEndDate=Date.parse(finaldate)
              console.log(planEndDate)
              var curDate=new Date().getTime()
              if(planEndDate>=curDate){
                this.ans=planEndDate-curDate
                this.days=(Math.floor(this.ans/86400000))
                console.log("you got "+this.days+ " days left")
                var sevenDaysBeforepePlanEndDate=planEndDate-604800000;
                console.log(sevenDaysBeforepePlanEndDate)
                if(curDate>=sevenDaysBeforepePlanEndDate){
                  console.log("hi")
                  this.transactionService.getTransactionsByPlanEndDate(value).subscribe(
                    data=>{
                      this.transactionDate=data
                      console.log(this.transactionDate)
                      let objLen=Object.keys(this.transactionDate).length
                      console.log(objLen)
                      for(var i=0;i<objLen;i++){
                        this.itemName.push(this.transactionDate[i].transactionItem)
                      }
                      console.log(this.itemName)
                      this.itemName.forEach(asdf=>{
                        this.transactionService.getTransactionsByItem(asdf).subscribe(
                          data=>{
                            console.log("data got it rey!!!")
                           console.log(data)
                           this.tItem=data
                           console.log(this.tItem)
                          },
                          error=>{
                            console.log("error getting transaction by transaction item name in homepage component")
                          }
                        )
                      })  
                    }
                  )
              }
            } 
            else{
              console.log("plan ended")
              this.transactionService.getTransactionsByPlanEndDate(value).subscribe(
                data=>{
                  this.transactionByDate=data;
                  var length = Object.keys(this.transactionByDate).length;
                  for(var i=0;i<length;i++){
                      this.item.push(this.transactionByDate[i].transactionItem)
                      this.id.push(this.transactionByDate[i].transactionId)
                  }
                  console.log("items:"+this.item)
                  this.item.forEach(abcd=>{
                    console.log(abcd)
                    this.subscribedItemService.deleteSubscribedItemByName(abcd).subscribe(
                      data=>{
                        console.log("subscribedItem deleted")
                      },
                      error=>{
                        console.log("error deleting subscribeditem")
                      }
                    )
                  })
                  this.id.forEach(id=>{
                    this.transactionService.deleteTransactionById(id).subscribe(
                      data=>{
                        console.log("deleted transaction")
                      },
                      error=>{
                        console.log("error deleting transaction")
                      }
                    )
                  })
                },
                error=>{
                  console.log("error getting date data")
                  
                }
              )
         
            }
         })
    
        },
        error=>{
          console.log("error getting the transaction data")
        }
       
    ) 
  
  }

  subscriptionDetails(id:number){
    console.log(id) 
    this.router.navigate(["/subscriptionDetails",id])
  } 
  goToOtherSubscriptions(){
    this.router.navigate(["/otherSubscriptions"])
  }
   
  


  }
  

