import { Component, OnInit } from '@angular/core';
import {  Observable, Observer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import jwt_decode from 'jwt-decode';
import io from 'socket.io-client/dist/socket.io';
import Swal from 'sweetalert2'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { User } from 'src/models/user';
import { AuthService } from 'src/app/core/authService/auth.service';
@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  socket: io.Socket;
    token = localStorage.getItem("token");
    SOC_URL = 'https://africano365.tn:8000';
id;
  tk:any;
  bloque:boolean;
  isSubmitted = false;
  loading = false;
  loginForm: FormGroup;
  date:Date; 
  authboluser=false;
  username: string = localStorage.getItem("user");
  UserPlayer:any;
  userplayer:User ={
 id:undefined,
username:undefined,
    password:undefined,
    agent:undefined,
   score:undefined,
  };
   score :number;
   visitorId:any;
   myOB =Observable.create((observer :Observer<any>)=>{
   
    this.socket.on('balance', function (data:any) {
      if(data.balance==-1){
        localStorage.clear()
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
          timerProgressBar:   false,
          timer: 5000,
          title: "l'utilisateur est déjà connecté dans une autre appareil, merci de bien vérifier...."
        })
        setTimeout(()=>{                           //<<<---using ()=> syntax
          window.location.reload()
     }, 5000);
       
      }
 
      observer.next(data)
      this.score= data.balance
      this.bloque = data.blocked
   });
    
  })
    constructor( private authService: AuthService,private router: Router,
     
    ) { }
  
    ngOnInit( ) {
     

    this.loginForm = this.createFormGroup();
    this.UserPlayer = JSON.parse( localStorage.getItem("Users"));
    this.username= localStorage.getItem('user');
 
    if(this.UserPlayer){
      this.authboluser=true
      const fpPromise = FingerprintJS.load()
      fpPromise.then(fp => fp.get())
      .then(result => {
        console.log(result)
        // This is the visitor identifier:
        this.visitorId = result.visitorId
        this.connect(this.visitorId);
        console.log(this.connect(this.visitorId))
   this.myOB.subscribe((data)=>{
    console.log(data.balance)
   this.score=data.balance
   this.bloque = data.blocked
         },(error) => {
       }, () => {
       
         
       })
      })
     }
    this.tk=localStorage.getItem("token")
    if (this.tokenExpired(this.tk) ) {
      localStorage.clear();
      window.location.reload();
    }
  
}
private tokenExpired(token: string) {
  var decoded : any = jwt_decode(this.tk);
  const expiry = decoded.exp
  return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}
connect(fp){
  this.id=localStorage.getItem("dx")
  this.socket = io.connect(this.SOC_URL,  {'forceNew': true });
  setInterval(() => {
    this.socket.emit('Getbalance', { 'id': this.id, 'finger_print': fp });
  }, 1000)
}


get formControls() { return this.loginForm.controls; }
createFormGroup(): FormGroup {
  return new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(1)]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
}
ngOndestry(){
  const element = document.getElementById('user-info')
  element.style.display = "block"
  const element2 = document.getElementById('nav-mobile')
  element2.style.display = "none"
  
}
closeScroll(){
  const element = document.getElementById('divToStyle')
    element.style.overflowX  = "hidden"
    element.style.height = "100%"
    console.log("hello")
}
OpenScroll(){
  const element = document.getElementById('divToStyle')

  element.style.overflowY = "auto"
  element.style.height = "100%"
  console.log("helsslo")
}
exit(){
  this.router.navigate([""]);
  localStorage.clear();
  setTimeout(()=>{                           //<<<---using ()=> syntax
    window.location.reload()
}, 1000);
  
}
gotoactivcompo(){
  this.router.navigate(["bet-history"])
}
gotomyaccount(){
  this.router.navigate(["my-account"])
}
gotomybounus(){
  this.router.navigate(["my-bonuses"])
}
gotkycVerification(){
  this.router.navigate(["kyc-verification"])
}
gotochangepassword(){
  this.router.navigate(["change-password"])
}
gotoTransaction(){
  this.router.navigate(["history-financial"])
}
gotoCasinoHistory(){
  this.router.navigate(["history-betting"])
}
chat(){
  this.router.navigate(["chat"]) 
}
    login(): void {
      this.isSubmitted = true;
      this.loading = true;
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe( res => {
          if (res){      
            const myObjStr = JSON.stringify(res);
            localStorage.setItem('token', JSON.parse(myObjStr).token);
            this.userplayer.id= JSON.parse(myObjStr).user.id;
            this.userplayer.username= JSON.parse(myObjStr).user.username;
            this.userplayer.agent= JSON.parse(myObjStr).user.useragent;
            this.userplayer.password=  JSON.parse(myObjStr).user.userpass;
            this.userplayer.score= JSON.parse(myObjStr).user.score;
            localStorage.setItem('dx', this.userplayer.id);
            localStorage.setItem('user', this.userplayer.username);
            localStorage.setItem('score', this.userplayer.score);
          }
          else{
            this.loading = false;
            Swal.fire({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              icon: 'error',
              timerProgressBar:   false,
              timer: 5000,
              title: "Nom d'utilisateur ou Mot de passe incorrect !"
            })
          }
         
          
        },err=>{
      
         
          
        }
        );
    }
  
}