import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Libro } from 'src/app/Modelo/libro';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

libros : Libro[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void  {
        this.service.getbiblioteca()
        .subscribe(data=>{
          this.libros=data;
        })
      }


