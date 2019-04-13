import { NgModule } from "@angular/core";
//Modulos
import { Routes, RouterModule } from '@angular/router'
//Rutas
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'portafolio', component: PortafolioComponent},
    { path: 'item/:id', component: ItemComponent},
    { path: 'search/:terminos', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]



@NgModule({
    imports :[
        RouterModule.forRoot( app_routes, { useHash: true} )
    ],
    exports :[
        RouterModule
    ]
})

export class AppRoutingModule{

}