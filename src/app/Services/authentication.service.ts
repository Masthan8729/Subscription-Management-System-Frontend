import { Injectable } from '@angular/core';
import { isImportOrExportSpecifier } from 'typescript';
                                                                                                                       

@Injectable({                                           
  providedIn: 'root'
})
export class AuthenticationService {                                                                            
 /*  user=new User(); */
  constructor() { }
  /* authenticate( email ,password){
    if(email==this.user.email && password==this.user.password)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {
    sessionStorage.setItem('email',email)
    return true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }else
    return false;                                                                                                                                                                                                                                                                                                                                                                         
  }
   */
  isUserLoggedIn(){                                                          
    let user=sessionStorage.getItem('authenticatedUser')                                                                                  
    if(user==null)
    return false ;
    else
      return true;                                                                    
  }                                                                                                 
  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
  getLoggedInUserEmail() {
    let user = sessionStorage.getItem('authenticatedUser')
    if (user === null) return ''
    return user
  }
}
