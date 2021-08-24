import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  //--------------- Carousel de casino --------------------//
  slides = [
   {
     url: '../../../assets/B2.jpg',
     
     },
   {
     url: '../../../assets/B3.jpg' ,
   
   },{   url: '../../../assets/B1.jpg',
    },
   // {
   //   url: '../../../assets/B4.jpg',
  
   // }
   
 ];
 
 
 
 constructor() {
 }
 
 ngOnInit() {
 }
 
 }