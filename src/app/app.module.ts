import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Chart} from 'chart.js'
import { HttpClientModule } from '@angular/common/http';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
/* import { angular-credit-cards } from '@' */
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { DatePipe } from '@angular/common';
import { createPopper } from '@popperjs/core';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { MainComponent } from './Components/main/main.component';
import { OtherSubscriptionsComponent } from './Components/other-subscriptions/other-subscriptions.component';
import { PaymentSuccessComponent } from './Components/payment-success/payment-success.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SubcriptionDetailsComponent } from './Components/subcription-details/subcription-details.component';
import { SubscriptionAnalysisComponent } from './Components/subscription-analysis/subscription-analysis.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { RegistrationService } from './Services/registration.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthenticationService } from './Services/authentication.service';
import { DemoComponent } from './Components/demo/demo.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomepageComponent,
    HomeComponent,
    MainComponent,
    SubcriptionDetailsComponent,
    PaymentComponent,
    LogoutComponent,
    ErrorComponent,
    ProfileComponent,
    TransactionComponent,
    PaymentSuccessComponent,
    DemoComponent,
    OtherSubscriptionsComponent,
    SubscriptionAnalysisComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CreditCardDirectivesModule,
  ],
  providers: [RegistrationService,AuthenticationService,AuthGuardService,DatePipe, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
