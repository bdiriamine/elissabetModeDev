import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {


  username: any;
  isLoading = true;
  urlsi!: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
 
  
   }

  ngOnInit() {
    const element = document.getElementById('hider')!
    element.style.display = "block"
    this.username=localStorage.getItem("user");
    if (this.username ){
      this.urlsi= localStorage.getItem("urliframe")!;
      this.urlsi= this.sanitizer.bypassSecurityTrustResourceUrl(this.urlsi+"/live");
      this.isLoading = !this.isLoading;
    
     }
  }

}
