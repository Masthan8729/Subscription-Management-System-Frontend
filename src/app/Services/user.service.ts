import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  public userLoginFromRemote(user: User):Observable<User>
  {
    return this._http.post<User>("http://localhost:9000/login",user)
  }
   public registerUserFromRemote(user:User):Observable<any>
  {
    return this._http.post<any>("http://localhost:9000/registerUser",user)
  } 
  public getUserByEmail(email:string):Observable<User>{
    return this._http.get<User>("http://localhost:9000/getUserByEmail/"+email)
  }
}
