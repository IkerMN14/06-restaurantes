import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurantes } from '../interfaces/restaurantes.interfaces';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor( private http: HttpClient) { }
  private baseUrl : string =environment.baseUrl;

  getRestaurantes(){
    return this.http.get<Restaurantes[]>('http://localhost:3000/restaurantes' );
  } 
  getRestaurantesPorId(Id:string){
    return this.http.get<Restaurantes>('http://localhost:3000/restaurantes/' + Id);
  }

  getSugerencias(termino: string){
    return this.http.get<Restaurantes[]>(`${this.baseUrl}/restaurantes?q=${termino}&_limit=6`);
  }

  agregarRestaurante(restaurante: Restaurantes){ //recibe un heroe
    return this.http.post<Restaurantes>(this.baseUrl + '/restaurantes/', restaurante);
    //return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe); 
    //regresa un         <Heroe>  :Observable<Heroe>
  }

  actualizarRestaurante(restaurante: Restaurantes){ //recibe un heroe
    return this.http.post<Restaurantes>(this.baseUrl + '/restaurantes/' + restaurante.id, restaurante);    
    //return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe); 
        //regresa un         <Heroe>  :Observable<Heroe>
      }
      borrarRestaurante(id: string){ //recibe un id, no devuelve nada
        return this.http.delete<any>(`${this.baseUrl}/restaurantes/${id}`); 
    }
  


}
