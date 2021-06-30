import { Component, OnInit } from '@angular/core';

import { GoogleChartInterface } from 'ng2-google-charts';
import { RegistrationService } from 'src/app/Services/registration.service';
import { SubscribedItems } from 'src/app/Models/subscribed-items';
import { Transaction } from 'src/app/Models/transaction';
import {Chart} from 'chart.js'
import { SubscribedItemsService } from 'src/app/Services/subscribed-items.service';
import { TransactionService } from 'src/app/Services/transaction.service';
import { Router } from '@angular/router';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-subscription-analysis',
  templateUrl: './subscription-analysis.component.html',
  styleUrls: ['./subscription-analysis.component.css']
})
export class SubscriptionAnalysisComponent implements OnInit {
  subscribedItems=new SubscribedItems()
  transaction=new Transaction()
  transactionByPlan=new Transaction()
  transactionDate=new Transaction()
  planValue:Array<number>=[];
  item:Array<string>=[];
  uniqueTransactionDates:Array<string>=[];
  transactionDates:Array<string>=[];
  transactionsOnDate:Array<number>=[];
  Linechart=[];
  Barchart=[]
  msg='';
  msg1=''
  value='';
  constructor(private service:RegistrationService,private router:Router, private subscribedItemService:SubscribedItemsService,private transactionService:TransactionService) { }

  ngOnInit() {
    $('#exampleFormControlSelect1').on('click',function() {
      var selectedItem = $('#exampleFormControlSelect1').val();
      console.log(selectedItem)
      
    });
    this.subscribedItemService.getSubscribedItems().subscribe(
      data=>{
        this.subscribedItems=data;
        console.log("showing subscribed items")
      },
      error=>{
        console.log("error showing subscribed items")
      })
    
    this.transactionService.getTransactions().subscribe(
      data=>{
        this.transaction=data;
        var length=Object.keys(this.transaction).length
        for(var i=0;i<length;i++){
          console.log(i)
          this.item.push(this.transaction[i].transactionItem)
          this.planValue.push(this.transaction[i].transactionAmount)
          this.transactionDates.push(this.transaction[i].transactionDate)
        }
       
    console.log(this.transactionDates)
    for(var i=0;i<this.transactionDates.length;i++){
      if(this.transactionDates[i]==this.transactionService[i+1]){

      }
    }

    
 this.uniqueTransactionDates = Array.from(new Set(this.transactionDates));
    console.log(this.uniqueTransactionDates)
    this.uniqueTransactionDates.forEach(transactionDate=>{
      console.log(transactionDate)
      this.transactionService.getTransactionsByTransactionDate(transactionDate).subscribe(
      data=>{
          this.transactionDate=data
          var length=Object.keys(this.transactionDate).length
          this.transactionsOnDate.push(length)
      }
    ) 

  })
  console.log(this.transactionsOnDate )
     if(this.item.length!=0 || this.planValue.length!=0){   
      this.Barchart=new Chart('mainchart',{
        type:'bar',
        data:{
          labels:this.uniqueTransactionDates,
          datasets:[{
            label:"No of Payments",
            data:this.transactionsOnDate,
            borderWidth:0.5
          }]
        },
        options:{
          responsive: false,
          title:{
            text:"Subscriptions By Date",
           display:true
        },
        scales:{  
          yAxes:[{
            display:true,
            ticks:{
              beginAtZero:true
            }
          }],
          xAxes:[{
            ticks:{
              maxRotation: 90,
              minRotation: 0
            }
              
          }]
        }
      }});
     }
    else{
       this.msg1='No data to display'
    }

    if(this.item.length!=0 || this.planValue.length!=0){  
    this.Linechart=new Chart('linechart',{
      type:'line',
      data:{
        labels:this.item,
        datasets:[{
          label:"plan Amount (Rs)",
          data:this.planValue,
          fill:false,
          lineTension:0.5,
          borderColor:"green",
          borderWidth:4

        }]
      },
      options:{
        title:{
          text:"Subscription-Plan",
         display:true
      },
      scales:{  
        yAxes:[{
          display:true,
          ticks:{
            beginAtZero:true
          }
        }],
        xAxes:[{
            display:true
        }]
      }
    }});
  }
  else{
     this.msg='No data to display'
  }

  })
}
goToHome(){
  this.router.navigate(["/homepage"])
}

}
