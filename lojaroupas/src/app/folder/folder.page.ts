import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  lista: any = [];
  cat: any;

  constructor(public http: HttpClient) {


  }


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.http.get("https://akextest.000webhostapp.com/ionic/VAT_Boutique/ionic.php?" + this.folder).subscribe(data => {
      this.lista = data;


  });
}}
