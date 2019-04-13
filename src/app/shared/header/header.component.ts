import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public titulo: "JR Portafolio"
  constructor( 
    public _infoS: InfoPaginaService,
    public _router: Router
  ) {
      
   }

  ngOnInit() {
    //this.titulo = this._infoS.titulo
    //console.log('Este es el this desde el header '+this._infoS.titulo)
  }
  buscarProducto(event){
    if(event.length<1){
      return;
    }
    this._router.navigate(['/search', event])
    console.log(event)
  }

}
