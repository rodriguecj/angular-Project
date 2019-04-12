import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interface/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  public info: InfoPagina = {}
  public cargada: boolean = false
  public titulo: any
  public equipo: any

  constructor( 
     public _http: HttpClient
  ) {
    console.log('Ya cargo el servicio')
    this.cargarInfo()
    this.cargarEquipo()
  }
  public cargarInfo(){
    this._http.get('../../assets/data/data-pagina.json')
    .subscribe(
      (resp: InfoPagina)=>{
        this.cargada = true
        this.info = resp
        this.titulo = this.info.titulo
        console.log('Desde servicio'+this.info.titulo)
      }
    )
  }
  public cargarEquipo(){
    this._http.get("https://angular-html-c98a1.firebaseio.com/equipo.json").subscribe(
      (resp)=>{
        this.cargada = true
        this.equipo = resp;
        console.log(resp)
      },err=>{
        console.log(err)
      }
    )
  }
}
