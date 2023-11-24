import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurantes } from '../interfaces/restaurantes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor( private http: HttpClient) { }
  getRestaurantes(){
    return this.http.get<Restaurantes[]>('http://localhost:3000/restaurantes' );
  } 
  getRestaurantesPorId(Id:string){
    return this.http.get<Restaurantes[]>('http://localhost:3000/restaurantes' + Id);
  }

}
