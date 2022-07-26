import { Noticia } from './../models/noticia';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = "http://localhost:3000/noticias"

  constructor(private httpClient: HttpClient) { }

  getNoticias(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(this.url)
  }
}
