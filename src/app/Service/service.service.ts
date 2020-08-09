import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../Modelo/libro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 private  url = 'http://localhost:9090'

  constructor(private http:HttpClient) { }


  getbiblioteca(){
    this.http.get<Libro[]>(this.url+'/all');
  }
}
