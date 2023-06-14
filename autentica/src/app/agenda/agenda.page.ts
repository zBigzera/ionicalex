import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------
import { Storage } from '@capacitor/storage';//ALEX------
import { Router } from '@angular/router';//ALEX-------

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class AgendaPage implements OnInit {
lista: any = [];
logado: any = [];
  constructor(public http: HttpClient, private router: Router) {
    // this.conferirlogin();
    this.escrevedados();
   }

  ngOnInit() {
  }
escrevedados(){
  this.http.get("https://aycav.000webhostapp.com/loginAngular/jsonexibir.php").subscribe(data => {
    this.lista = data;
  })
}

async conferirLogin() {
  const { value } = await Storage.get({ key: 'nome' });
  if(value==null){
    this.router.navigate(['login']);
  }else{
    this.logado=value.split(' ')[0]; 
  }
 
}

async sair(){
    //alert("Deslogado com sucesso!");
    await Storage.remove({ key: 'nome' });
    await Storage.remove({ key: 'telefone' });
    //this.router.navigate(['home']);
    this.router.navigate(['home']).then(() => {
      window.location.reload();
      });
}
}
