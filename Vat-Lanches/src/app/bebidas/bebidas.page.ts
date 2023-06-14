import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  lista: any = [];
  constructor(public http: HttpClient) { 
    this.escreveDados();
 } 

escreveDados(){
     this.http.get("https://aycav.000webhostapp.com/vatlanchesdefinitivo/vatlanchesFINALIZADO/ionic/jsoncategoria.php?tipo=Bebidas").subscribe( data => {
      this.lista = data;
      //console.log(data); 
      } )
}

  ngOnInit() {
  }

}
