import { Noticia } from './../../models/noticia';
import { NoticiasService } from './../../services/noticias.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private noticiasService: NoticiasService) { }

  listaNoticias = [] as Noticia[]

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias(){
    this.noticiasService.getNoticias().subscribe( (noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    } )
  }



}
