import { Component } from '@angular/core';
import { RestaurantesService } from '../../services/restaurantes.service';
import { Restaurantes } from '../../interfaces/restaurantes.interfaces';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  termino: string =''; // termino de busqueda
  restaurantes: Restaurantes[]=[];  // Ctrl + pto
  restauranteSeleccionado!:Restaurantes;
  restauranteEncontrado : boolean = false;

  constructor(private restauranteService: RestaurantesService) { }

  buscando(){
    //this.heroesService.getHeroes().subscribe(heroes => this.heroes=heroes); 
    this.restauranteService.getSugerencias(this.termino).subscribe(rest => {
      if(rest.length===0){this.restauranteEncontrado=true;} else {this.restauranteEncontrado=false;}
        this.restaurantes=rest;})
  
  }

  
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
      const restaurante: Restaurantes = event.option.value;
      console.log(restaurante.id);
      //console.log(heroe);
      this.termino=restaurante.nombre; //para que se vea en el input
      this.restauranteService. getRestaurantesPorId(restaurante.id!)
            .subscribe(rest => this.restauranteSeleccionado= rest);
    }
  
}
