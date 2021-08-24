import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CasinoProvidersService {

  urlGet:any;
  limit:any;
  url = 'https://africano365.tn:81/api/games';
  monObjetcnxCasino ={"page":2,"url":"", "limit":199};
  monObjetcnxCa={"page":2, "limit":600};
  urlGame:any;
  filterdata: any;
  urliframe=localStorage.getItem("cs");
  urstargame:any;
  casinoList:any;
  ur2 = 'https://africano365.tn:81/api/IncreaseGame/';
  urlTopGames = 'https://africano365.tn:81/api/topGames';
  mySubString:any
   hr:any
   
  providersNames=[
    
    { Provider:"Choisir un provider"
  },
//     { Provider:"Tous les jeux"
// },{
//     Provider:"1x2 Gaming"
//   },
//   {
//     Provider:"Ainsworth"
//   },
  
//   {
//     Provider:"Amatic"
//   },
  
//   {
//     Provider:"Aristocrat"
//   },
//   {
//     Provider:"August Gaming"
//   },
//   {
//     Provider:"BeeFee"
//   },
//   {
//     Provider:"Betsolutions"
//   },

//   {
//     Provider:"Booming"
//   },
//   {
//     Provider:"Booongo"
//   },
  
//   {
//     Provider:"Bomba"
//   },
//   {
//     Provider:"Concept Gaming"
//   },
//   {
//     Provider:"Egt"
//   },
//   {
//     Provider:"Espresso Games(EGP)"
//   },
//   {
//     Provider:"Fazi"
//   },
//   {
//     Provider:"Game Fish Global"
//   },
//   {
//     Provider:"GameArt"
//   },
//   {
//     Provider:"Habanero"
//   },
//   {
//     Provider:"Iron Dog"
//   },
//   {
//     Provider:"KA Gaming"
//   },
  
//   {
//     Provider:"Leander"
//   },
//   {
//     Provider:"Leap gaming"
//   },
//   {
//     Provider:"Macaw"
//   },
//   {
//     Provider:"NetEnt"
//   },
//   {
//     Provider:"NJOY"
//   },
//   {
//     Provider:"Novomatic"
//   }
//   ,
//   {
//     Provider:"Quickspin"
//   },
//   {
//     Provider:"Playson"
//   },
//   {
//     Provider:"Pragmatic play"
//   },
  
//   {
//     Provider:"Racing"
//   },
//   {
//     Provider:"RedRake"
//   },
  
//   {
//     Provider:"Ses gaminng"
//   },
//   {
//     Provider:"Spinmatic"
//   },
  
//   {
//     Provider:"Spinomenal"
//   },
//   {
//     Provider:"TGC"
//   },
//   {
//     Provider:"Video Bingos"
//   },
//   {
//     Provider:"Wazdan"
//   },{
//     Provider:"We are casino",
   
//   },

 ]

 categoryNames=[
  { Provider:"Choisir un catégorie",
 
},
//   { Provider:"Tous les catégories",
 
// },{
//   Provider:"Bingo",
 
// },
// {
//   Provider:"Financial Betting",
// },
// {
//   Provider:"Provably Fair Games",
 
// },
// { Provider:"Video Slots",
// },{
//     Provider:"Virtual Sports",
//   },
  
  
 ]
 categoryNamesLiveCasino=[
 
 
  { Provider:"Tous les jeux",
 
// },{
//   Provider:"Ezugi"
// },
// { Provider:"Bet games",

// },{
//     Provider:"Evolution",
   
//   },
//   {
//     Provider:"Vivo Games",
   
//   
},
 ]
 gameBySelectOption:any;
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'mon-jeton'
  })
};
  zaaa: any;
  constructor(private http: HttpClient) {
  
   }

//-------------------------------C-A-S-I--N--O-----------------------------------//
getAllCasino(){
  this.urlGet= this.urliframe
  this.limit=2826;
//  return this.http.get(this.url, {
//     params: {
//       page: 1,
//       limit: this.limit,
//       url:  this.urlGet ,
//     },
//     observe: 'response'
//   })
}
getGameCatigory(text: any){
  this.limit=2400
  // return this.http.get<any>("https://africano365.tn:81/api/game-categories/?",{
  //   params: {
  //     page: 1,
  //     limit: this.limit,
  //     Category: text,
  //     url:  this.urliframe ,
  //   },
  //   observe: 'response'
  // })
}
gameProvider(text: any){
  this.urlGet= this.urliframe
  this.limit=900;
  // return this.http.get(this.url, {
  //   params: {
  //     page: 1,
  //     limit: this.limit,
  //     provider: text,
  //     url:  this.urlGet ,
  //   },
  //   observe: 'response'
  // })


}
   //-------------------------------- PlAY GAME CASINO ------------------------------------------------//
   star(game: any) {
     console.log(game)
    let ui : any= localStorage.getItem("IdG")
    this.mySubString = ui.substring(
      ui.lastIndexOf('') +1
     
    );
    this.mySubString = game.substring(
   game.lastIndexOf("&Path=")+7, 
 );
 this.urstargame=localStorage.getItem("urliframe");
 console.log(this.urstargame)
   this.zaaa=this.urstargame+"/"+this.mySubString
   console.log(this.mySubString)
   console.log(this.zaaa)
   return this.http.get(this.zaaa)
 

}
starGabi(menutiTLE: any){
  let ui : any= localStorage.getItem("IdG")
  this.mySubString = ui.substring(
    ui.lastIndexOf('"') 
  );
  let loveyou =  ui.replace(/['"]+/g, '')
 this.hr = "https://africano365.tn/GapiApiR/play.php?login="+loveyou+"&game="+menutiTLE
  // window.location.href= this.hr.replace(/['"]+/g, '');
  
}
 //----------------------------- Best Games Users -------------------------------//

  getsearchText(){
    return this.filterdata
  }
  setsearchText(text: any){
    this.filterdata=text;
 
  }
  getAllCasinoGames(){
    this.urlGet= this.urliframe
    this.limit=10;
    // return this.http.get(this.urlTopGames, {
    //   params: {
    //     page: 1,
    //     limit: this.limit,
    //     url:  this.urlGet ,
    //   },
    //   observe: 'response'
    // })
   
 
  }
  getAllCasinoBlackJack(){
    this.urlGet= this.urliframe
    this.limit=2826;
    // return this.http.get(this.url, {
    //   params: {
    //     page: 1,
    //     limit: this.limit,
    //     url:  this.urlGet ,
    //   },
    //   observe: 'response'
    // })
 
  }
  getAllCasinoJACKPOT(){
    this.urlGet= this.urliframe
    this.limit=2826;
    // return this.http.get(this.url, {
    //   params: {
    //     page: 1,
    //     limit: this.limit,
    //     url:  this.urlGet ,
    //   },
    //   observe: 'response'
    // })
 
  }
  getTopGames(){
    this.urlGet= this.urliframe
    this.limit=20;
    // return this.http.get(this.urlTopGames, {
    //   params: {
    //     page: 1,
    //     limit: this.limit,
    //     url:  this.urlGet ,
    //   },
    //   observe: 'response'
    // })
    
  }

}