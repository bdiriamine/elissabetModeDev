import { Component, OnInit } from '@angular/core';
import 'vanilla-tilt';
declare var VanillaTilt : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector(".tilt-image"), { max: 25, speed: 400 });

VanillaTilt.init(document.querySelectorAll(".tilt-image"));
  }

}
