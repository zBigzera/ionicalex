import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------
import { Router } from '@angular/router';//ALEX-------

import { Storage } from '@capacitor/storage';//ALEX------

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class InicialPage implements OnInit {
  formulario: any = {email: '', senha: ''};
  
  lista: any = [];
  constructor(public http: HttpClient, private router: Router) {   
    this.gravarUsuario(null,null)}
  

  ngOnInit() {
  }
  async gravarUsuario(n: any,t: any):  {
    //alert(`Gravado!`);
    await Storage.set({
      key: 'nome',
      value: n,
    });
    await Storage.set({
      key: 'telefone',
      value: t,
    });
  }


  verifica(){
    
    this.http.get("https://aycav.000webhostapp.com/loginAngular/jsonlogin.php?email="+this.formulario.email+"&senha="+this.formulario.senha).subscribe(  data => {
       this.lista =  data;
       if(this.lista[0]!=undefined){
        this.gravarUsuario(this.lista[0].nome,this.lista[0].telefone);
        //alert("Login efetuado com sucesso!");
        //this.router.navigate(['home']);
        this.router.navigate(['agenda']).then(() => {
        window.location.reload();
        });


       }else{
         alert("Login ou senha inválido");
       }

       } )
  
    
  }

  async ver() {
    const { value } = await Storage.get({ key: 'nome' });
    alert(`Hello ${value}!`);
  }

}
