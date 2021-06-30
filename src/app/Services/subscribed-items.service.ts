import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {SubscribedItems} from '../Models/subscribed-items'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribedItemsService {

  constructor(private _http:HttpClient) { }
  public saveSubscribedItems(subscribedItems:SubscribedItems):Observable<SubscribedItems>
  {
    return this._http.post<SubscribedItems>("http://localhost:9000/addSubscribedItems",subscribedItems)
  }
  public getSubscribedItems():Observable<SubscribedItems>
  {
    return this._http.get<SubscribedItems>("http://localhost:9000/getSubscribedItems");
  }
  public deleteSubscribedItemByName(subscribedItemName:string):Observable<any>{
    return this._http.delete<any>("http://localhost:9000/deleteSubscribedItemByName"+subscribedItemName)
  }
  public getSubscribedItemByPlan(plan:string):Observable<SubscribedItems>{
    return this._http.get<SubscribedItems>("http://localhost:9000/getSubscribedItemByPlan"+plan)
  }
}
