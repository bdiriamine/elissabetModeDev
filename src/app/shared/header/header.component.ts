import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/models/user';
import jwt_decode from 'jwt-decode';
import io from 'socket.io-client/dist/socket.io';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/core/authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginForm !: FormGroup
  isLoggedIn = false;
  username



  socket: io.Socket;
  token = localStorage.getItem("token");
  SOC_URL = 'https://africano365.tn:81';
  id: any;
  tk: any;
  bloque: boolean;
  isSubmitted = false;
  loading = false;
  // loginForm: FormGroup;
  date: Date;
  authboluser = false;
  UserPlayer: any;
  userplayer: User = {
    id: undefined,
    username: undefined,
    password: undefined,
    agent: undefined,
    score: undefined,
  };
  score: number;

  myOB = Observable.create((observer: Observer<any>) => {

    this.socket.on('balance', function (data: any) {
      if (data.balance == -1) {
        localStorage.clear()
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
          timerProgressBar: false,
          timer: 5000,
          title: "l'utilisateur est déjà connecté dans une autre appareil, merci de bien vérifier...."
        })
        setTimeout(() => {                           //<<<---using ()=> syntax
          window.location.reload()
        }, 5000);

      }

      observer.next(data)
      this.score = data.balance
      this.bloque = data.blocked
    });

  })

  constructor(private authServ: AuthService, private router: Router,) {
    this.authServ.isLoggedIn();
    this.authServ.user.subscribe((userr: any) => {
      console.log("aaaaaaaaaaa", userr);

      this.username = userr.username
      localStorage.setItem("name", this.username)

    })
    console.log("fdezezezezezezezezezezezez", this.username)

    if (!this.username) {
      this.username = localStorage.getItem("username")
    }
    this.authServ.castSignedIn.subscribe((res: any) => {
      if (res == true) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  }
  closeScroll() {
    const element = document.getElementById('divToStyle')

    element.style.overflowY = "hidden"
    element.style.height = "100%"

  }
  OpenScroll() {
    const element = document.getElementById('divToStyle')

    element.style.overflowY = "auto"
    element.style.height = "100%"

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    //********************************** */

    this.UserPlayer = JSON.parse(localStorage.getItem("Users"));
    this.username = localStorage.getItem('user');
    if (this.username == null)
      this.username = ''
    this.connect()
    if (this.UserPlayer) {
      this.authboluser = true
      this.myOB.subscribe((data: any) => {
        this.score = data.balance
        this.bloque = data.blocked
      }, (error: any) => {
      }, () => {


      })

    }
    this.tk = localStorage.getItem("token")
    if (this.tokenExpired(this.tk)) {
      localStorage.clear();
      window.location.reload();

    }

  }

  connect() {
    this.id = localStorage.getItem("dx")
    // this.socket = io.connect(this.SOC_URL, { query: { token: this.token }, 'forceNew': true });
    // this.socket.emit('Getbalance', { id: this.id,token: this.token });
  }


  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(1)]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  gotoLiveScore() {
    this.router.navigate(["Score"])
  }
  gotodepot() {
    this.router.navigate(["depot"]);
  }
  gotoHome() {
    this.router.navigate([""]);

  }
  gotoSport() {
    this.router.navigate(["sport"]);

  }
  gotoLive() {
    this.router.navigate(["live-viewSimple"]);

  }
  gotoVR() {
    this.router.navigate(["virtuels"]);

  }
  gotoHot() {
    this.router.navigate(["Hot"]);
  }

  gotoBlackJack() {
    this.router.navigate(["Black-Jack"]);

  }
  gotoCasino() {
    this.router.navigate(["Casino"]);

  }
  gotoLiveCasino() {
    this.router.navigate(["Live-Casino"]);

  }
  gotoEVO() {
    this.router.navigate(["Evolution"]);
  }

  gotoactivcompo() {
    this.router.navigate(["bet-history"])
  }
  gotoJP() {
    this.router.navigate(["JackPot"])
  }

  exit() {
    this.router.navigate([""]);
    localStorage.clear();
    setTimeout(() => {                           //<<<---using ()=> syntax
      window.location.reload()
    }, 1000);

  }
  private tokenExpired(token: string) {
    var decoded: any = jwt_decode(this.tk);
    const expiry = decoded.exp
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  // login(): void {
  //   this.isSubmitted = true;
  //   this.loading = true;
  //   this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(res => {
  //     if (res) {
  //       const myObjStr = JSON.stringify(res);
  //       localStorage.setItem('token', JSON.parse(myObjStr).token);
  //       this.userplayer.id = JSON.parse(myObjStr).user.id;
  //       this.userplayer.username = JSON.parse(myObjStr).user.username;
  //       this.userplayer.agent = JSON.parse(myObjStr).user.useragent;
  //       this.userplayer.password = JSON.parse(myObjStr).user.userpass;
  //       this.userplayer.score = JSON.parse(myObjStr).user.score;
  //       localStorage.setItem('dx', this.userplayer.id);
  //       localStorage.setItem('user', this.userplayer.username);
  //       localStorage.setItem('score', this.userplayer.score);
  //     }
  //     else {
  //       this.loading = false;
  //       Swal.fire({
  //         toast: true,
  //         position: 'top',
  //         showConfirmButton: false,
  //         icon: 'error',
  //         timerProgressBar: false,
  //         timer: 5000,
  //         title: "Nom d'utilisateur ou Mot de passe incorrect !"
  //       })
  //     }
  //   }, err => { });
  // }
  login() {
    this.authServ.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
  }
  logout() {
    this.authServ.logout();
    // this.settings = false;
    this.router.navigate(["/"])
  }
}