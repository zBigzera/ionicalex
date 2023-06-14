import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.page.html',
  styleUrls: ['./pg1.page.scss'],
})
export class Pg1Page implements OnInit {

  constructor() { 
    this.ver();//ALEX---------------
  }

  ngOnInit() {
  }
  //ALEX-----------------------------
  valor : any;
  temp : any;
  async ver() {
    const { value } = await Storage.get({ key: 'nome' });
    //this.valor=value;
    this.temp=value;
    this.valor=JSON.parse(this.temp);
  }
  //-----------------------------

apagar(){
  localStorage.clear();
}

}