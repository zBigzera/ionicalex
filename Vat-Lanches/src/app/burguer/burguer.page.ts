import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-burguer',
  templateUrl: './burguer.page.html',
  styleUrls: ['./burguer.page.scss'],
})
export class BurguerPage implements OnInit {

  lista: any = [];
  constructor(public http: HttpClient) { 
    this.escreveDados();
 } 

escreveDados(){
     this.http.get("https://aycav.000webhostapp.com/vatlanchesdefinitivo/vatlanchesFINALIZADO/ionic/jsoncategoria.php?tipo=Hamburguer").subscribe( data => {
      this.lista = data;
      //console.log(data); 
      } )
}

  ngOnInit() {
  }

}
