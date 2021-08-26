import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../authService/auth.service';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  updatedRequest: any;
  userToken: any
  constructor(private authServ: AuthService, private toastrService: ToastrService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.userToken = localStorage.getItem("accessToken")

    if (this.userToken !== undefined && this.userToken != null && this.authServ.isTokenExpired()) {
      this.toastrService.warning("Session Timed Out! Please Login");

      return throwError("Session Timed Out")
    } else {



      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userToken}`
        }
      });

      return next.handle(request)
        .pipe(
          tap(event => {
          }, error => {
          })
        )

    }
  }
  // private translate(txt: string): string {
  //   return this.translateService.instant(txt);
  // }
}