import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public cargando = true
  public producto:ProductoInterface [] = []
  public productoFiltrado:ProductoInterface [] = []

  constructor(
    public _http: HttpClient
  ) { 
    this.cargarProducto()
  }

  public cargarProducto(){

    return new Promise( (resolve, reject)=>{
        this._http.get("https://angular-html-c98a1.firebaseio.com/productos_idx.json").subscribe(
        (resp:ProductoInterface [])=>{
          //console.log(resp)
          this.cargando = false
          this.producto = resp
          resolve()
        },err=>{
          console.log(err)
        }
      )
    })
  }

  getProducto(id){
    return this._http.get('https://angular-html-c98a1.firebaseio.com/productos/'+id+'.json');
  }
  buscarProducto( termino:any) {
    if(this.producto.length == 0){
      this.cargarProducto().then( ()=>{
        //ejecutar despues de tener los productos
        //Aplicar el filtro
        this.filtrarProducto(termino)
      })
    }else{
      //Aplicar el filtro
      this.filtrarProducto(termino)
    }
  }
  filtrarProducto(termino){
    this.productoFiltrado = []
    //console.log(this.producto)
    termino = termino.toLocaleLowerCase()
    this.producto.forEach( prod=>{
      const lowerTitulo = prod.titulo.toLocaleLowerCase()
      const lowerCategoria = prod.categoria.toLocaleLowerCase()
      if( lowerCategoria.indexOf(termino)>=0 || lowerTitulo.indexOf(termino)>=0)
        this.productoFiltrado.push(prod)
    })
  }
}
