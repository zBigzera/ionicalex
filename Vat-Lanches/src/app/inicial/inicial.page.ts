import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {
lista: any = [];
  constructor(public http: HttpClient) {
    this.escreveDados();
   }

  ngOnInit() {
  }
escreveDados(){
 
    this.http.get("https://aycav.000webhostapp.com/vatlanchesdefinitivo/vatlanchesFINALIZADO/ionic/recomendadosjson.php").subscribe( data => {
     this.lista = data;
    
     } )
}
}
