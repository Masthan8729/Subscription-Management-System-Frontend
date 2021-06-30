import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../Models/card'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _http:HttpClient) { }
  public saveCardToDb(card:Card):Observable<Card>{
    return this._http.post<Card>("http://localhost:9000/addCard",card)
  }
  
  public getCards():Observable<Card>{
    return this._http.get<Card>("http://localhost:9000/getCards")
  }
  
  public getCardByCardNo(cardId:number):Observable<Card>{
    return this._http.get<Card>("http://localhost:9000/getCard/"+cardId)
  }
}
