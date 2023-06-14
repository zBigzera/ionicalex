import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'inicial', icon: 'Home' },
    { title: 'Hambúrgueres', url: 'burguer', icon: 'fast-food' },
    { title: 'Bebidas', url: 'bebidas', icon: 'cafe' },
    { title: "Pizza's", url: 'pizza', icon: 'pizza' },
    { title: 'Sobremesas', url: 'sobremesas', icon: 'ice-cream' },
   
    { title: 'Encomendas', url: 'encomendas', icon: 'archive' },
    { title: 'Contatar', url: 'perfil', icon: 'person' },
  ];
  constructor() {}
}
