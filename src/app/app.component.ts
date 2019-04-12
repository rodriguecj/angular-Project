import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service'
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'protafolio';
  constructor(
    public _infoPaginaService: InfoPaginaService,
    public _productoServicio: ProductoService
  ){
  }
}
