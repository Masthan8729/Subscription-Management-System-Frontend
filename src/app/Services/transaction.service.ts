import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../Models/transaction'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http:HttpClient) { }
  public saveTransaction(transaction:Transaction):Observable<Transaction>{
    return this._http.post<Transaction>("http://localhost:9000/addTransaction",transaction)
  }
  public getTransactions():Observable<Transaction>{
    return this._http.get<Transaction>("http://localhost:9000/getAllTransactions")
  }
  public getTransactionsByTransactionId(transactionId:number):Observable<Transaction>{
    return this._http.get<Transaction>("http://localhost:9000/getTransactionsByItem/"+transactionId)
  }
  public getTransactionsByPlanEndDate(planEndDate:string):Observable<Transaction>{
    return this._http.get<Transaction>("http://localhost:9000/getTransactionsByPlanEndDate/"+planEndDate)
  }
  public getTransactionsByPlan(plan:string):Observable<Transaction>{
    return this._http.get<Transaction>("http://localhost:9000/getTransactionsByPlan/"+plan)
  }
  public getTransactionsByItem(transactionItem:string):Observable<Transaction>{
    return this._http.get<Transaction>("http://localhost:9000/getTransactionBytransactionItem/"+transactionItem)
  }
  public deleteTransactionById(transactionId:number):Observable<Transaction>{
    return this._http.delete<Transaction>("http://localhost:9000/deleteTransactionById/"+transactionId)
  }
  public getTransactionsByTransactionDate(transactionDate:string):Observable<Transaction>{
    return this._http.get<Transaction>("http://localhost:9000/getTransactionsByTransactionDate/"+transactionDate)
  }
}
