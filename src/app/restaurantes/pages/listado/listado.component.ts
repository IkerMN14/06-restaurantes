import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../../services/restaurantes.service';
import { Restaurantes } from '../../interfaces/restaurantes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  restaurantes: Restaurantes[]=[];
  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit(): void {
    this.restaurantesService.getRestaurantes().subscribe(resp => 
      {
        this.restaurantes=resp;
      });
    //this.heroesService.getHeroes().subscribe(resp => console.log(resp));
    //this.heroesService.getHeroes().subscribe(console.log); //es lo mismo
    }


}
