import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/registration.service';
import { Subscriptions } from 'src/app/Models/subscriptions';
import { SubscriptionService } from 'src/app/Services/subscription.service';


@Component({
  selector: 'app-other-subscriptions',
  templateUrl: './other-subscriptions.component.html',
  styleUrls: ['./other-subscriptions.component.css']
})
export class OtherSubscriptionsComponent implements OnInit {
subscriptions=new Subscriptions()
  constructor(private _service:RegistrationService,private subscriptionService:SubscriptionService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    this._service.setidValue(id)

    {this.subscriptionService.subscriptionsFromremote().subscribe(
      data=>{
        this.subscriptions=data
         console.log("data recieved")
      },
      error=>console.log("error recieved")
    )
   }
   $('#search').keyup(function (){
    $('.card').removeClass('d-none');
    var filter = $(this).val(); // get the value of the input, which we filter on
    $('.row').find('.card .card-body h5:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
})

  }
  subscriptionDetails(id:number){
    console.log(id) 
    this.router.navigate(["/subscriptionDetails",id])
  } 
  goToHome(){
    this.router.navigate(["/homepage"])
  }

}
