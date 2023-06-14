import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------
import { Router } from '@angular/router';//ALEX-------

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class CadastroPage implements OnInit {
  lista: any = [];
  formulario: any = {email: '', senha: '', telefone: '', nome: ''};
  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  cadastro(){
    
    this.http.get("https://aycav.000webhostapp.com/loginAngular/jsoninserir.php?nome="+this.formulario.nome+"&telefone="+this.formulario.telefone+"&email="+this.formulario.email+"&senha="+this.formulario.senha).subscribe(  data => {
       this.lista =  data;
       if(this.lista[0]=="certo"){
          alert("Cadastro realizado com sucesso. Efetue o login.");
          this.router.navigate(['inicial']);
       }else{
          alert("Ocorreu um problema ao realizar o cadastro.");
       }
       } )
  
     
  }
}
