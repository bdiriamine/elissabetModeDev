import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  firsname!:string;
  user:any
  ville!:string;
  satecr!:Date;
  etat!:string;
  constructor() { }

  ngOnInit() {
    this.user=localStorage.getItem("Users")
    console.log(this.user)
    this.firsname=JSON.parse(this.user).username
    this.ville=JSON.parse(this.user).gouvernement
    this.satecr=JSON.parse(this.user).created_at
    this.etat=JSON.parse(this.user).activated
  }

}
