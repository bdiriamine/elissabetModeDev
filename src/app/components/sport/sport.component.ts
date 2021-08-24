import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  username: any;
  urls:any;
  session:any;
  isLoading = true;
  iframUrl: any;
  tokenInfo: any;
  txt:any;
  part:any;
  constructor(private sanitizer: DomSanitizer) { }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
  ngOnInit() {
 
    this.getuser();
    if (this.username ){ this.tokenInfo = this.getDecodedAccessToken(localStorage.getItem("token")!); 
    console.log(this.tokenInfo)
    localStorage.setItem("url",this.tokenInfo.iframeURL)
    this.urls=this.sanitizer.bypassSecurityTrustResourceUrl(localStorage.getItem("url")!);  
    console.log(this.urls)
     this.txt = this.urls.changingThisBreaksApplicationSecurity.toString()
     localStorage.setItem("cs", this.txt)
      this.part = this.txt.substring(
        this.txt.lastIndexOf("n=") + 2, 
        this.txt.lastIndexOf("&languag")
    
  );
  this.session=this.part;
  this.iframUrl= localStorage.getItem("urliframe");
  console.log(this.iframUrl)
      if(!this.iframUrl){
        this.iframUrl= this.sanitizer.bypassSecurityTrustResourceUrl(`https://afri.ses.bet/Account/SportsBookAutoLogin?session=${this.session}`);
        console.log(this.iframUrl)
        localStorage.setItem("urliframe",`https://afri.ses.bet/(S(${this.session}))`);
        setTimeout(()=>{  this.iframUrl= this.sanitizer.bypassSecurityTrustResourceUrl(`https://afri.ses.bet/(S(${this.session}))/`)}, 1000);
 
      }else{
        this.iframUrl= this.sanitizer.bypassSecurityTrustResourceUrl(`https://afri.ses.bet/(S(${this.session}))/`)
      }
    
  this.isLoading = false;
  }
 
    
  }

getuser(){

  this.username=localStorage.getItem("user");
 
}
}