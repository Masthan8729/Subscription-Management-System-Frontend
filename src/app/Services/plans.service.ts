import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Plans} from '../Models/plans'

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private _http:HttpClient) { }
  public plansbyId(id:number):Observable<Plans>{
    return this._http.get<Plans>("http://localhost:9000/getPlansById/"+id)
  }
}
