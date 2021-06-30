import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  value:number;
  plan:string;
 idValue:number;
 cardId:number;
 subAnalysisPlan:string;
 loopValue:number;
  constructor(private _http:HttpClient) { }

  setsubAnalysisPlan(subAnalysisPlan){
    this.subAnalysisPlan=subAnalysisPlan;
  }
  getsubAnalysisPlan(){
    return this.subAnalysisPlan
  }
public setloopValue(loopValue:number){
  this.loopValue=loopValue
}
public getloopValue():number{
  return this.loopValue
}

  setValue(value){
    this.value=value
  }
  setPlan(plan){
    this.plan=plan
  }
  getValue(){ 
    return this.value
  }
  getPlantype(){
    return this.plan
  }
  setidValue(idValue)
  {
    this.idValue=idValue
  }
  getidValue(){
    return this.idValue;
  }
  setcardNum(cardId){
    this.cardId=cardId;
  }
  getcardNum(){
    return this.cardId;
   }
  
   
  
  
  
  
  
}
