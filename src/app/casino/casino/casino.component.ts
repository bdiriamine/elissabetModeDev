import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'
import { CasinoProvidersService } from '../services/casino-providers.service';
@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.scss']
})
export class CasinoComponent implements OnInit {
  textGameProvider = "Choisir un catégorie" //-------------------------Variable pour category------------//
  filtreGame = "Choisir un provider"; //-------------------------Variable pour Provider------------//
  selectedProviderOrcategory: string = '';  //-------------------------Variable pour prendre le valeur du provider or category selectionne------------//
  games: any;  //-------------------------variable qui contient les jeux casino------------//
  ALLgames: any; //-------------------------variable qui contient tous les jeux casino------------//
  provider: any; //-------------------------variable qui contient tous les jeux provider sur service casino------------//
  categoryProvider: any;  //-------------------------variable qui contient tous les jeux category sur service casino------------//
  filterdata = ''; //-------------------------variable pour filtre------------//
  url = 'https://africano365.tn:81/api/games'; //-------------------------url game casino------------//
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'mon-jeton'
    })
  };
  urlinit: any;
  bolScroll = true
  monObjetcnxCasino = { "page": 2, "url": "", "limit": 50 };
  load: boolean = true;
  limitCasinoScroll = 100;
  page = 0;
  scrollLM = 3000;
  urlHref: any;
  part: any;
  partText: any;
  username: any;
  constructor(private casiprovider: CasinoProvidersService, private http: HttpClient) { }
  ngOnInit(): void {
    this.username = localStorage.getItem("user")
    this.provider = this.casiprovider.providersNames;
    this.categoryProvider = this.casiprovider.categoryNames;
    this.urlinit = localStorage.getItem("cs")
    this.load = false
    // this.loadInitPost();
  }

  // loadInitPost() {
  //   this.http.get(this.url, {
  //     params: {
  //       page: 1,
  //       limit: 100,
  //       url: this.urlinit,
  //     },
  //     observe: 'response'
  //   }).toPromise()
  //     .then(response => {
  //       this.games = response.body
  //       this.spinner.hide();
  //     })
  //     .catch();
  // }
  // GetALL100Casino() {
  //   this.load = true
  //   this.page += 1
  //   this.limitCasinoScroll
  //   this.http.get(this.url, {
  //     params: {
  //       page: this.page,
  //       limit: this.limitCasinoScroll,
  //       url: this.urlinit,
  //     },
  //     observe: 'response'
  //   }).toPromise()
  //     .then(response => {
  //       this.games = response.body
  //       this.load = false
  //     })
  //     .catch();
  // }

  // getTopGames() {
  //   this.casiprovider.getAllCasinoGames().toPromise()
  //     .then((response: any) => {
  //       this.games = response.body
  //       this.load = false
  //       this.bolScroll = false
  //     })
  // }
  // getAll() {
  //   this.load = true
  //   this.casiprovider.getAllCasino().toPromise()
  //     .then((response: any) => {
  //       this.games = response.body
  //       this.load = false

  //     })
  // }
  // getslots() {
  //   this.load = true
  //   this.casiprovider.getGameCatigory("Video Slots").toPromise()
  //     .then((response: any) => {
  //       this.games = response.body
  //       this.load = false
  //     })
  // }


  // GameCasinoGet(text: any) {
  //   this.casiprovider.gameProvider(text).toPromise()
  //     .then((response: any) => {
  //       this.games = response.body
  //       this.load = false
  //       this.spinner.hide();
  //       this.spinner.hide();
  //     })
  // }
  // selectChange(event: any) {
  //   this.bolScroll = true;
  //   this.selectedProviderOrcategory = event.target.value
  //   switch (this.selectedProviderOrcategory) {
  //     case "Tous les jeux":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.casiprovider.getAllCasino().toPromise()
  //         .then((response: any) => {
  //           this.games = response.body
  //           this.load = false
  //           this.spinner.hide();
  //         })

  //       break;
  //     case "NetEnt":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("NetEnt");
  //       break;
  //     case "Novomatic":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("Novomatic");
  //       break;
  //     case "Playtech":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("Playtech");

  //       break;
  //     case "Amatic":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("Amatic");

  //       break;
  //     case "Ainsworth":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Ainsworth");
  //       break;
  //     case "Aristocrat":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Aristocrat");

  //       break;
  //     case "Quickspin":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Quickspin");
  //       break;
  //     case "Macaw":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("Macaw");
  //       break;
  //     case "1x2 Gaming":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("1x2 Gaming");
  //       break;
  //     case "Betixon":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("Betixon");
  //       break;
  //     case "KA Gaming":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("KA Gaming");
  //       break;
  //     case "Leander":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("Leander");
  //       break;
  //     case "August Gaming":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("August Gaming");
  //       break;
  //     case "Booongo":
  //       this.spinner.show();
  //       this.load = true
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.GameCasinoGet("Booongo");
  //       break;
  //     case "BeeFee":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("BeeFee");
  //       break;
  //     case "Betsolutions":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Betsolutions");
  //       break;
  //     case "Espresso Games(EGP)":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Espresso Games(EGP)");
  //       break;
  //     case "We are casino":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("We are casino");
  //       break;
  //     case "Wazdan":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Wazdan");
  //       break;
  //     case "SurGames":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("SurGames");
  //       break;
  //     case "RedRake":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("RedRake");
  //       break;
  //     case "Booming":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Booming");
  //       break;
  //     case "Evoplay Entertainment":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Evoplay Entertainment");
  //       break;
  //     case "Fantastic":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Fantastic");
  //       break;
  //     case "GameArt":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("GameArt");
  //       break;
  //     case "Game Fish Global":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Game Fish Global");
  //       break;
  //     case "Justplay":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Justplay");
  //       break;
  //     case "Leap gaming":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Leap gaming");
  //       break;
  //     case "NJOY":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("NJOY");
  //       break;
  //     case "Playson":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Playson");
  //       break;
  //     case "Pragmatic play":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Pragmatic play");
  //       break;
  //     case "Ses gaminng":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Ses gaminng");
  //       break;
  //     case "Spinomenal":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Spinomenal");
  //       break;
  //     case "TGC":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("TGC");
  //       break;
  //     case "Spinmatic":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Spinmatic");
  //       break;
  //     case "Concept Gaming":
  //       this.spinner.show();
  //       this.textGameProvider = "Choisir un catégorie"
  //       this.load = true
  //       this.GameCasinoGet("Concept Gaming");
  //       break;
  //     case "Habanero":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("Habanero");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Iron Dog":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("Iron Dog");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Ortiz":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("Ortiz");
  //       this.textGameProvider = "Choisir un catégorie";
  //       break;
  //     case "RCT":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("RCT");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Video Bingos":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("Video Bingos");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Fazi":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("Fazi");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Racing":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("racing");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Egt":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("egt");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Bomba":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("bomba");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     case "Amatic":
  //       this.spinner.show();
  //       this.load = true
  //       this.GameCasinoGet("Amatic");
  //       this.textGameProvider = "Choisir un catégorie"
  //       break;
  //     default:
  //       break;
  //   }
  // }
  //FONCTION pour les Category
  // selectChangeByCategory(event: any) {
  //   this.bolScroll = true;
  //   this.selectedProviderOrcategory = event.target.value
  //   switch (this.selectedProviderOrcategory) {
  //     case "Tous les catégories":
  //       this.spinner.show();
  //       this.load = true
  //       this.casiprovider.getAllCasino().toPromise()
  //         .then((response: any) => {
  //           this.filtreGame = "Choisir un provider"
  //           this.games = response.body
  //           this.load = false
  //           this.spinner.hide();
  //         })

  //       break;
  //     case "Video Slots":
  //       this.spinner.show();
  //       this.load = true
  //       this.casiprovider.getGameCatigory("Video Slots").toPromise()
  //         .then((response: any) => {
  //           this.filtreGame = "Choisir un provider"
  //           this.games = response.body
  //           this.load = false
  //           this.spinner.hide();
  //         })
  //       break;
  //     case "Virtual Sports":
  //       this.spinner.show();
  //       this.load = true
  //       this.casiprovider.getGameCatigory("Virtual Sports").toPromise()
  //         .then((response: any) => {
  //           this.filtreGame = "Choisir un provider"
  //           this.games = response.body
  //           this.load = false
  //           this.spinner.hide();
  //         })
  //       break;
  //     case "Bingo":
  //       this.spinner.show();
  //       this.load = true
  //       this.casiprovider.getGameCatigory("Bingo").toPromise()
  //         .then((response: any) => {
  //           this.filtreGame = "Choisir un provider"
  //           this.games = response.body
  //           this.load = false
  //           this.spinner.hide();
  //         })
  //       break;
  //     case "Provably Fair Games":
  //       this.spinner.show();
  //       this.load = true
  //       this.casiprovider.getGameCatigory("Provably Fair Games").toPromise()
  //         .then((response: any) => {
  //           this.filtreGame = "Choisir un provider"
  //           this.games = response.body
  //           this.load = false
  //           this.spinner.hide();
  //         })
  //       break;
  //     case "Financial Betting":
  //       this.spinner.show();
  //       this.load = true
  //       this.casiprovider.getGameCatigory("Financial Betting").toPromise()
  //         .then((response: any) => {
  //           this.filtreGame = "Choisir un provider"
  //           this.games = response.body
  //           this.load = false
  //           this.spinner.hide();
  //         })
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // async startGame(game: string, gameGabi: any, menutiTLE: any) {
  //   if (gameGabi == 1) {
  //     this.textGameProvider = "Choisir un catégorie"
  //     this.filtreGame = "Choisir un provider"
  //     this.load = true
  //     this.spinner.show()
  //     this.casiprovider.starGabi(game, gameGabi, menutiTLE);
  //   } else {
  //     this.load = true
  //     this.spinner.show()
  //     this.casiprovider.star(game).toPromise()
  //       .then((response: any) => {
  //         this.load = false
  //         this.spinner.hide()
  //         this.textGameProvider = "Choisir un catégorie"
  //         this.filtreGame = "Choisir un provider"

  //         this.part = response.gameUrl;
  //         this.partText = this.part.substring(
  //           this.part.lastIndexOf("://") + 3,

  //         );
  //         this.urlHref = "https://" + this.partText
  //         window.location.href = this.urlHref;
  //       })
  //     // .catch((err) => { 
  //     //     Swal.fire({
  //     //       toast: true,
  //     //       position: 'top',
  //     //       showConfirmButton: false,
  //     //       icon: 'error',
  //     //       timerProgressBar:   false,
  //     //       timer: 5000,
  //     //       title: "Votre session a expiré veuillez vous reconnecter"
  //     //     });
  //     //     setTimeout(()=>{  
  //     //       localStorage.clear()
  //     //       window.location.reload()
  //     //  }, 5000);

  //     // });
  //   }
  // }
}