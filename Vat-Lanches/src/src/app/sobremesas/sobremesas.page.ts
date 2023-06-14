import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
})
export class SobremesasPage implements OnInit {


  lista: any = [];
  constructor(public http: HttpClient) { 
    this.escreveDados();
 } 

escreveDados(){
     this.http.get("https://aycav.000webhostapp.com/vatlanchesdefinitivo/vatlanchesFINALIZADO/ionic/jsoncategoria.php?tipo=Sobremesas").subscribe( data => {
      this.lista = data;
      //console.log(data); 
      } )
}


  ngOnInit() {
  }

}
