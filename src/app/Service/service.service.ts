import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../Modelo/libro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url = 'http://localhost:9090';


  getbiblioteca(){
   return this.http.get<Libro[]>(this.Url + "/libros");
  }
}
