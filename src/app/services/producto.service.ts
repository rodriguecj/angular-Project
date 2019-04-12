import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public cargando = true
  public producto:ProductoInterface
  constructor(
    public _http: HttpClient
  ) { 
    this.cargarProducto()
  }

  public cargarProducto(){
    this._http.get("https://angular-html-c98a1.firebaseio.com/productos_idx.json").subscribe(
      (resp:ProductoInterface)=>{
        console.log(resp)
        this.cargando = false
        this.producto = resp
      },err=>{
        console.log(err)
      }
    )
  }
}
