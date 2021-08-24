import { Injectable } from '@angular/core';
import{observable,of, Observable} from "rxjs";
import { from } from 'rxjs';
import { Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  private router!: Router;
handleError<T>(operation="operation",result?:T){
  return(error:any):Observable<T> =>{
   
    
   // window.alert(" Utilisateur ou mot de passe incorrect ");
    return of (result as T)
  }
}
  constructor() { }
}
