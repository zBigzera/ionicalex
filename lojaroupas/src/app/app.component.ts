import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Destaques', url: '/folder/nada', icon: 'mail' },
    { title: 'Vestidos', url: '/folder/tipo=vestido', icon: 'paper-plane' },
    { title: 'Jeans', url: '/folder/tipo=jeans', icon: 'heart' },
    { title: 'Casaco', url: '/folder/tipo=casaco', icon: 'archive' },
    { title: 'Até 50R$', url: '/folder/preco=FALSE', icon: 'trash' },
    { title: 'Mais de 50R$', url: '/folder/preco=TRUE', icon: 'warning' },
    { title: 'Infantil', url: '/folder/tamanho=infantil', icon: 'warning' },
    { title: 'Adulto', url: '/folder/tamanho=adulto', icon: 'warning' },
    { title: 'Plus', url: '/folder/tamanho=plus', icon: 'warning' },

  ];
  
  constructor() {}
}
