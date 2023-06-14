import { Component } from '@angular/core';
import { Router } from '@angular/router';//ALEX-------
import { Storage } from '@capacitor/storage';//ALEX------

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //TUDO A PARTIR DAQUI---------------------------
    formulario: any = {nome: ''};
  
    listanomes: any = [];//AQUI------------------
  
    constructor(private router: Router) {  
      //this.salvar(null)
    }
  
    valor: any;
    async salvar() {
      const { value } = await Storage.get({ key: 'nome' });
      this.valor = value;
      if (this.valor != null) {            
        this.listanomes = JSON.parse(this.valor); 
      }
      this.listanomes.push([this.formulario.nome, this.formulario.valor]);
    
      await Storage.set({
        key: 'nome',
        value: JSON.stringify(this.listanomes),
      });
    
      this.router.navigate(['pg1']).then(() => {
        window.location.reload();
      });
    }
  }