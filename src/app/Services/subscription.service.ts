import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private _http:HttpClient) { }

  public subscriptionsFromremote():Observable<any>
  {
    return this._http.get<any>("http://localhost:9000/getAllSubscriptions")
  } 
  public subscriptionsbyId(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:9000/getSubscriptionById/"+id)
  }
}
