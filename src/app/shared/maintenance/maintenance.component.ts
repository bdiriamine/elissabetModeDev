import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  element2!: HTMLElement;
  element!: HTMLElement;
  // element3: HTMLElement;
  element4!: HTMLElement;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.element2 = document.getElementById('ftr')
    this.element = document.getElementById('hdweb')
    // this.element3 = document.getElementById('hd')
    
    this.element4 = document.getElementById('hdmob')
    console.log(this.element4)
    this.element.style.display = "none"
    //  this.element3.style.display = "none"
     this.element4.style.display = "none"
     this.element2.style.display = "none"
  }
  gotoHome(){
    this.router.navigate(["/home"]);
   
  }
  ngOndestroy(){
    this.element.style.display = "block"
     this.element2.style.display = "block"
    //  this.element3.style.display = "block"
     this.element4.style.display = "block"
  }

}