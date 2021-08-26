import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'Get Current Url Route Demo';
  currentRoute: any;
  timeout: any;
  title = 'EllisaBet';
  showScroll!: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  constructor() {

  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  ngOnInit(): void {
    try{
      var burgerBtn = document.getElementById('burgerBtn')!;
      var mobile = document.getElementById('mobile')!;
      var demo1 = document.getElementById('demo1')!;
      burgerBtn.addEventListener('click', function () {
        mobile.classList.toggle('navigation');
      }, false);
  
      demo1.addEventListener('click', function () {
        demo1.classList.add('active');
        mobile.classList.add('demo1');
        mobile.classList.remove('demo2', 'demo3', 'navigation');
      }, false);
    }catch{

    }
  
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }


}
