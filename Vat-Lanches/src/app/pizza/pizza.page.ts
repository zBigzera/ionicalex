import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {


  lista: any = [];
  constructor(public http: HttpClient) { 
    this.escreveDados();
 } 

escreveDados(){
     this.http.get("https://aycav.000webhostapp.com/vatlanchesdefinitivo/vatlanchesFINALIZADO/ionic/jsoncategoria.php?tipo=Pizza").subscribe( data => {
      this.lista = data;
      //console.log(data); 
      } )
}


  ngOnInit() {
  }

}
