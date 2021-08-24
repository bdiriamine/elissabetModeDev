import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/models/user';
import { ErrorHandlerService } from '../interceptor/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://africano365.tn:81/api";
// private url = "http://localhost:3000/api";
isUserLoggedIn = new BehaviorSubject<boolean>(false);
userId!: Pick<User, "id">;
userBet :any;
agent:any;
useridentity:any;
psw:any;
score:any;
userplayer:User ={
  id:undefined,
  username:undefined,
  password:undefined,
  agent:undefined,
  score:undefined,
};

httpOptions: { headers: HttpHeaders } = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

constructor(
  private http: HttpClient,
  private errorHandlerService: ErrorHandlerService,
  private router: Router,
  public jwtHelper: JwtHelperService
) {}

signup(user: Omit<User, "id">): Observable<User> {
  return this.http
    .post<User>(`${this.url}/signup`, user, this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    );
}
 isAuthenticated(): boolean {
  const token = localStorage.getItem('token');
  // Check whether the token is expired and return
  // true or false
  return !this.jwtHelper.isTokenExpired(token!);
}

login(
  username: Pick<User, "username">,
  password: Pick<User, "password">
): Observable<{
  token: string;
  userId: Pick<User, "id">;
}> {
  this.router.navigateByUrl('betting');
  return this.http
    .post(`${this.url}/login`, { username, password }, this.httpOptions)
    .pipe(
      first(),
      tap((tokenObject: any) => {
       // console.log(tokenObject)
     
       localStorage.setItem("Users", JSON.stringify(tokenObject.user));
        localStorage.setItem("IdG", JSON.stringify(tokenObject.user.ref_uuid));
        this.userplayer = tokenObject.user
        this.isUserLoggedIn.next(true);
        window.location.reload();
        
      }),
      catchError(
        this.errorHandlerService.handleError<{
          token: string;
          userId: Pick<User, "id">;
        
        }>("login")
      )
    );
}

}