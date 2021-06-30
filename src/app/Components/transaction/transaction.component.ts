import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { RegistrationService } from 'src/app/Services/registration.service';
import { Transaction } from 'src/app/Models/transaction';
import { __spreadArrays } from 'tslib';
import { TransactionService } from 'src/app/Services/transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions=new Transaction()
  transactionByDate=new Transaction()
  values:Array<string>=[];
  item:Array<string>=[];
  id:Array<number>=[];
  formattedDate:any;
  SimpleDateFormat:any;
  ans:any;
  days:any;
  curDay:any;
  constructor(private transactionService:TransactionService,private service:RegistrationService, private datePipe:DatePipe,private router:Router) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      data=>{
        this.transactions=data 
        /* var length=Object.keys(this.transactions).length
        console.log("got the transaction data") 
        for(var i=0;i<length;i++)
        { 
          this.values.push(this.transactions[i].planEndDate)
         
        }  
        
        console.log(this.values)
          this.values.forEach(value=>{ 
             var newdate = value.split("-").join("/");
             var datearray = newdate.split("/");
             var finaldate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
             console.log(finaldate)
            var peDate=Date.parse(finaldate)
            console.log(peDate)
            var curDate=new Date().getTime()
            if(peDate>curDate){ 
              this.ans=peDate-curDate
              this.days=(Math.floor(this.ans/86400000))
              console.log("you got "+this.days+ " days left")
              var daysLeft=this.days; 
              console.log(daysLeft)
              var sevenDaysBeforepeDate=peDate-604800000;
              console.log(sevenDaysBeforepeDate)
              if(curDate<=sevenDaysBeforepeDate){
                this.service.getTransactionsByPlanEndDate(value).subscribe(
                  data=>{
                    this.transactionByDate=data
                    var objLength=Object.keys(this.transactionByDate).length
                    for(var i=0;i<objLength;i++){
                      this.item.push(this.transactionByDate[i].transactionItem)
                      this.id.push(this.transactionByDate[i].transactionId)
                  }
                  }
                )
            }
            
             
            
            
          } 
          else{
            console.log("plan ended")
            this.service.getTransactionsByPlanEndDate(value).subscribe(
              data=>{
                this.transactionByDate=data;
                console.log(data)
                for(var i=0;i<[this.transactionByDate].length;i++){
                    this.item.push(this.transactionByDate[i].transactionItem)
                    this.id.push(this.transactionByDate[i].transactionId)
                }
                this.item.forEach(item=>{
                  this.service.deleteSubscribedItemByName(item).subscribe(
                    data=>{
                      console.log("subscribedItem deleted")
                    },
                    error=>{
                      console.log("error deleting subscribeditem")
                    }
                  )
                })
                this.id.forEach(id=>{
                  this.service.deleteTransactionById(id).subscribe(
                    data=>{
                      console.log("deleted transaction")
                    },
                    error=>{
                      console.log("error deleting transaction")
                    }
                  )
                })
                console.log(this.item)
              },
              error=>{
                console.log("error getting date data")
                
              }
            )
       
          }
       }) */
  
      },
      error=>{
        console.log("error getting the transaction data")
      }
    )
  }
  goToHome(){
    this.router.navigate(["/homepage"])
  }

}
