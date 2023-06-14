import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------
import { Router } from '@angular/router';//ALEX-------
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule],
})
export class HomePage {
  lista : any = [];
  constructor(public http: HttpClient, private router: Router) {
    this.exibirjs("");//OTÁVIO
  }

  async exibirjs(cat:any){
    this.http.get("https://aycav.000webhostapp.com/lojaonlinefiltro/exibir.php?"+cat).subscribe(data => {//OTÁVIO
      this.lista = data;
    })
  }

}

 
