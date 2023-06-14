import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.page.html',
  styleUrls: ['./encomendas.page.scss'],
})
export class EncomendasPage implements OnInit {

  constructor(public http: HttpClient, public alertController: AlertController) { 
    this.escreveDados();
  }
  lista: any=[];
  ngOnInit() {
  }
  escreveDados() {
    this.http.get("https://aycav.000webhostapp.com/vatlanchesdefinitivo/vatlanchesFINALIZADO/ionic/jsoncategoria.php").subscribe(data => {
      this.lista = data;
      //console.log(data); 
    })
  }

  //carrinho-----------------
  contador: number = 0;
  valorTotal: number = 0;
  carrinho: any = [];
  calculaValorTotal() {
    let valor = 0;
    for (let p of this.carrinho) {
      valor += p.quantidade * p.preco;
    }
    this.valorTotal = valor;
  }

  addProduto(product:any) {
    let added = false;
    for (let p of this.carrinho) {
      if (p.codigoproduto === product.codigoproduto) {
        p.quantidade += 1;
        this.lista.quantidade += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.quantidade = 1;
      this.lista.quantidade = 1;
      this.carrinho.push(product);
    }
    this.contador++;
    console.log(this.carrinho);
    this.calculaValorTotal();
  }

  decreaseProduto(product:any) {
    for (let [index, p] of this.carrinho.entries()) {
      if (p.codigoproduto === product.codigoproduto) {
        this.contador--;
        p.quantidade -= 1;
        if (p.quantidade == 0) {
          this.carrinho.splice(index, 1);
        }
      }
    }

    console.log(this.carrinho);
    this.calculaValorTotal();
  }

  async encomendar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Encomenda por Whatsapp',
      inputs: [

        {
          label: 'nome',
          name: 'nome',
          placeholder: 'Seu nome...',
          type: 'text'
        },
        {
          label: 'endereco',
          name: 'endereco',
          placeholder: 'Endereço de entrega...',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Cancel');
          }
        }, {
          text: 'Encomendar',
          handler: (info) => {
            //this.itimeLeft1=info.valor1;
            //console.log('Ok');
            this.encomendarZap(info.nome, info.endereco);
          }
        }
      ]
    });

    await alert.present();
  }

  encomendarZap(n:any, e:any) {

    let encomenda = "";
    for (let p of this.carrinho) {
      encomenda += p.quantidade + "x " + p.categoria + " " + p.descricao + " | ";
    }
    //encomenda+="VALOR TOTAL: R$"+this.valorTotal.toFixed(2);


    let msg = "ENCOMENDA PELO APP! Meu nome é: " + n + ". Meu endereço é: " + e + ". Gostaria de: " + encomenda + "VALOR TOTAL: R$" + this.valorTotal.toFixed(2);
    //console.log(msg);
    this.cadastrarDados(n, e, encomenda, this.valorTotal);
    window.open("https://wa.me/5532999992383?text=" + msg);
    this.esvaziarCarrinho();

  }


  cadastrarDados(cliente:any, endereco:any, pedido:any, total:any) {
    let resultadoInserir: any = [];
    this.http.get("https://petshopkta.000webhostapp.com/ionic/sorveteria/sorveteriajsoninserir.php?cliente=" + cliente + "&endereco=" + endereco + "&pedido=" + pedido + "&total=" + total).subscribe(data => {
      resultadoInserir = data;
      console.log(resultadoInserir);
    })
  }

  esvaziarCarrinho() {
    this.contador = 0;
    this.valorTotal = 0;
    this.carrinho = [];
    for (let p of this.lista) {
      p.quantidade = 0;
    }
  }


}
