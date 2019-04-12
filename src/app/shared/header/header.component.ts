import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public titulo: "JR Portafolio"
  constructor( 
    public _infoS: InfoPaginaService
    
  ) {
      
   }

  ngOnInit() {
    //this.titulo = this._infoS.titulo
    //console.log('Este es el this desde el header '+this._infoS.titulo)
  }

}
