import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantesService } from '../../services/restaurantes.service';
import { delay, switchMap } from 'rxjs';
import { Restaurantes } from '../../interfaces/restaurantes.interfaces';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  restaurante!: Restaurantes;
  constructor(private activatedRoute:ActivatedRoute,
              private restauranteService: RestaurantesService,
              private router: Router
              ){}
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['Id']);
    this.activatedRoute.params.pipe(
      delay(2000),
      switchMap(({id}) => this.restauranteService.getRestaurantesPorId(id)))
      .subscribe(restaurante => this.restaurante = restaurante)
  }
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }


}
