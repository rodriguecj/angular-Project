import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoDescripcion } from 'src/app/interface/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public producto:ProductoDescripcion;
  public id:string
  constructor(
    public _route:ActivatedRoute,
    public _productoService: ProductoService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(parametros=>{
      //console.log(parametros.id)
      this.id = parametros.id;
      this._productoService.getProducto(parametros.id).subscribe((parametros:ProductoDescripcion)=>{
        this.producto = parametros
        //console.log(parametros)
      })
    })
  }
}
