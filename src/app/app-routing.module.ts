import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';
import { AboutusComponent } from './Components/aboutus/aboutus.component';

import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { MainComponent } from './Components/main/main.component';
import { OtherSubscriptionsComponent } from './Components/other-subscriptions/other-subscriptions.component';
import { PaymentSuccessComponent } from './Components/payment-success/payment-success.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';
import { SubcriptionDetailsComponent } from './Components/subcription-details/subcription-details.component';
import { SubscriptionAnalysisComponent } from './Components/subscription-analysis/subscription-analysis.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { DemoComponent } from './Components/demo/demo.component';


const routes: Routes = [
{path:'', component:HomeComponent,
children:[
{path : 'login' , component:LoginComponent}, 
{path : 'register' , component:RegisterComponent},
{path : 'aboutus' , component:AboutusComponent}]
},

{path:'',component:MainComponent,
children:[
  {path : 'homepage', component:HomepageComponent,canActivate:[AuthGuardService]},
  {path:'subscriptionDetails',component:SubcriptionDetailsComponent,canActivate:[AuthGuardService]},
  {path:'subscriptionDetails/:id',component:SubcriptionDetailsComponent,canActivate:[AuthGuardService]},
  {path:'subscriptionDetails/:id/payment',component:PaymentComponent,canActivate:[AuthGuardService]},
 /*  {path:'payment',component:PaymentComponent,canActivate:[AuthGuardService]}, */
  {path :'logout', component:LogoutComponent,canActivate:[AuthGuardService]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'transactions',component:TransactionComponent,canActivate:[AuthGuardService]},
  {path:'paymentSuccess',component:PaymentSuccessComponent,canActivate:[AuthGuardService]},
  {path:'cardDetails',component:DemoComponent,canActivate:[AuthGuardService]},
  {path:'otherSubscriptions',component:OtherSubscriptionsComponent,canActivate:[AuthGuardService]},
  {path:'subscriptionAnalysis',component:SubscriptionAnalysisComponent,canActivate:[AuthGuardService]}

],
  
},    
{path:'**',component:ErrorComponent},
{path:'',redirectTo:'/',pathMatch:'full'}
];
 




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegisterComponent,LoginComponent,AboutusComponent]
