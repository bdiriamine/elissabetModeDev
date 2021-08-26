import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/models/user';
import { ErrorHandlerService } from '../interceptor/error-handler.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signedIn = new BehaviorSubject<boolean>(false);
  castSignedIn = this.signedIn.asObservable();
  tokenn = new Subject()
  castId = new Subject();
  user = new Subject<object>()
  loggedIn = false;
  authToken!: any;



  private url = "https://africano365.tn:81/api";
  // private url = "http://localhost:3000/api";
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  userId!: Pick<User, "id">;
  userBet: any;
  agent: any;
  useridentity: any;
  psw: any;
  score: any;
  userplayer: User = {
    id: undefined,
    username: undefined,
    password: undefined,
    agent: undefined,
    score: undefined,
  };

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    public jwtHelper: JwtHelperService,
    private toastr: ToastrService,
  ) { }

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

  // login(
  //   username: Pick<User, "username">,
  //   password: Pick<User, "password">
  // ): Observable<{
  //   token: string;
  //   userId: Pick<User, "id">;
  // }> {
  //   this.router.navigateByUrl('betting');
  //   return this.http
  //     .post(`${this.url}/login`, { username, password }, this.httpOptions)
  //     .pipe(
  //       first(),
  //       tap((tokenObject: any) => {
  //         // console.log(tokenObject)

  //         localStorage.setItem("Users", JSON.stringify(tokenObject.user));
  //         localStorage.setItem("IdG", JSON.stringify(tokenObject.user.ref_uuid));
  //         this.userplayer = tokenObject.user
  //         this.isUserLoggedIn.next(true);
  //         window.location.reload();

  //       }),
  //       catchError(
  //         this.errorHandlerService.handleError<{
  //           token: string;
  //           userId: Pick<User, "id">;

  //         }>("login")
  //       )
  //     );
  // }


  //*************************************************************************************** */
  isLoggedIn() {
    if (localStorage.getItem('accessToken') != null) {
      this.signedIn.next(true)
      return this.loggedIn = true;

    } else {
      this.signedIn.next(false)
      return this.loggedIn = false;

    }
  }
  isLoggedInn(loggedIn) {
    if (localStorage.getItem('accessToken') != null) {
      this.signedIn.next(true)
      return loggedIn = true;

    } else {
      this.signedIn.next(false)
      return loggedIn = false;

    }
  }
  showeSuccess(message) {
    this.toastr.success(message, 'Success', {
      timeOut: 7000,
    });
  }
  showerror(message) {
    this.toastr.error(message, 'Error', {
      timeOut: 7000,
    });
  }
  login(username: any, password: any) {
    return this.http.post(environment.apiUrl + 'auth/signin', { username, password }).subscribe((res: any) => {
      if (res) {
        this.signedIn.next(true);
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('idUser', res.id);
        localStorage.setItem('username', res.username);
        this.tokenn.next(localStorage.getItem('accessToken'))

        this.castId.next(res.id);
        // if (res.showTerms == true) {
        //   this.modall = this.modalService.open(ModalAcceptTermsComponent, { backdrop: "static" });
        // } else {
        //   console.log("res", res.has_uploaded_id)
        //   if (!res.has_uploaded_id) {
        //     this.modal = this.modalService.open(FileModalComponent, { backdrop: "static" });

        //     this.showeSuccess(this.success)
        //     this.http.get(environment.apiUrl + 'user/' + res.id).subscribe((resp: any) => {
        //       this.user.next(resp.data)
        //     })
        //   } else {
        this.showeSuccess('User connected successfully!')
        this.http.get(environment.apiUrl + 'user/' + localStorage.getItem("idUser")).subscribe((resp: any) => {
          console.log("userrrrrr", resp)
          this.user.next(resp.data)
        })
      }
      this.router.navigate(['/home']);
      //   }
      // }
    }
      , ((err: any) => {
        this.showerror(err)
      })
    )
  }
  logout() {
    this.signedIn.next(false);
    this.authToken = null;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
  getToken() {
    this.authToken = localStorage.getItem('accessToken');
    return this.authToken;
  }
  getTokenExpirationDate(token: string): Date {
    token = this.getToken()
    var decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
}