import { Component, OnInit } from '@angular/core';
import 'vanilla-tilt';
declare var VanillaTilt:any;
@Component({
  selector: 'app-mini-games',
  templateUrl: './mini-games.component.html',
  styleUrls: ['./mini-games.component.css']
})
export class MiniGamesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector(".tilt-image"), { max: 25, speed: 400 });

VanillaTilt.init(document.querySelectorAll(".tilt-image"));
  }

}
