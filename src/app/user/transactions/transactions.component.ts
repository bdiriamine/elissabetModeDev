import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { FormGroup } from '@angular/forms';
// import { TransactionsService } from 'src/app/services/transactions.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { HistoryDepotRetraitService } from 'src/app/services/history-depot-retrait.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  loginForm!: FormGroup;
  transactions: any;
  zindex = 1;
  etat: boolean = false;
  montantjoue: any;
  montantgain: any;
  // BOL:boolean;
  retraitDepot: any;
  TicketsAffiche: any;
  // TicketbetList:[{}];
  isSubmitted = false;
  loading = false;
  // username: string;
  UserPlayer: any;

  // lengthdata :number;
  myOB = Observable.create((observer: Observer<any>) => { observer.next(this.getdTicketsPlayer()) })
  // myOB2 = Observable.create((observer: Observer<any>) => { observer.next(this.getdTicketsPlayerdipo()) })
  constructor() {
    // this.UserPlayer = JSON.parse( localStorage.getItem("Users"));
    // this.username= localStorage.getItem('user');
  }


  ngOnInit() {
    // this.UserPlayer = JSON.parse(localStorage.getItem("Users"));
    // if (this.UserPlayer) {
    //   this.myOB.subscribe((data) => {

    //   }, (error) => {
    //     console.log(error);
    //   }, () => { console.log('Fini !'); })
    //   this.myOB2.subscribe((data) => {

    //   }, (error) => {
    //     console.log(error);
    //   }, () => { console.log('Fini !'); })
    // }

  }
  getdTicketsPlayer() {

    // this.transc.getTransictions(this.UserPlayer.id).subscribe(res => {
    //   this.lengthdata = res.transactions.length;
    //   if (res) {
    //     this.transactions = res.transactions.reverse();
    //     this.transactions.forEach(element => {
    //       element.Date = new Date(element.Date)
    //     });


    //   } else {
    //   }
    // })
  // }
  // getdTicketsPlayerPage(page) {
  //   this.zindex = page;
  //   this.transc.getTransictionsByPage(this.UserPlayer.id, page).subscribe(res => {
  //     this.lengthdata = res.transactions.length;
  //     if (res) {
  //       this.transactions = res.transactions.reverse();
  //       this.transactions.forEach(element => {
  //         element.Date = new Date(element.Date)
  //       });


  //     } else {

  //     }
  //   })
  // }
  // backTo() {
  //   this.zindex = this.zindex - 1

  //   if (this.zindex < 1) {
  //     this.zindex = 1
  //   }

  //   this.transc.getTransictionsByPage(this.UserPlayer.id, this.zindex).subscribe(res => {

  //     if (res) {

  //       this.transactions = res.transactions.reverse();

  //       this.transactions.forEach(element => {
  //         element.Date = new Date(element.Date)
  //       });


  //     } else {

  //     }
  //   })
  // }


  // nextTo() {

  //   if (this.zindex < 4) {

  //     this.zindex = this.zindex + 1

  //   }
  //   this.transc.getTransictionsByPage(this.UserPlayer.id, this.zindex).subscribe(res => {
  //     if (res) {

  //       this.transactions = res.transactions.reverse();
  //       this.transactions.forEach(element => {
  //         element.Date = new Date(element.Date)
  //       });


  //     } else {

  //     }
  //   })
  // }
  // trans() {
  //   this.etat = false
  //   this.getdTicketsPlayer()
  // }
  // dipo() {
  //   this.etat = true
  //   this.getdTicketsPlayerdipo()
  // }

  // getdTicketsPlayerdipo() {
  //   this.etat = true
  //   this.historydepotretrait.getHistoryDepotRetrait(this.UserPlayer.id).subscribe(res => {
  //     if (res) {
  //       this.BOL = true;
  //       this.retraitDepot = res.depot;

  //     } else {
  //       this.BOL = false;
  //     }
  //   })
  // }
  // shearch() {

  // }
}
}