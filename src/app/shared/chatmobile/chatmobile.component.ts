import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatmobile',
  templateUrl: './chatmobile.component.html',
  styleUrls: ['./chatmobile.component.scss']
})
export class ChatmobileComponent implements OnInit {

  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;
  element5: HTMLElement;
  element6: HTMLElement;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.element1 = document.getElementById('hdweb')
    this.element2 = document.getElementById('hdmobi')
    this.element3 = document.getElementById('caro')
    this.element4 = document.getElementById('navbar')
    this.element5 = document.getElementById('btntop')
    this.element6 = document.getElementById('ftr')
    this.element1.style.display = "none"
    this.element2.style.display = "none"
    this.element3.style.display = "none"
     this.element4.style.display = "none"
     this.element5.style.display = "none"
     this.element6.style.display = "none"
  }
  gotoHome(){
    this.router.navigate(["/home"]);
  }
  ngOndestroy(){
    this.element1.style.display = "block"
    this.element2.style.display = "block"
    this.element3.style.display = "block"
     this.element4.style.display = "block"
     this.element5.style.display = "block"
     this.element6.style.display = "block"
  }

}