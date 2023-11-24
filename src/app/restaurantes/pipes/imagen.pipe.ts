import { Pipe, PipeTransform } from '@angular/core';
import { Restaurantes } from '../interfaces/restaurantes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(restaurante:Restaurantes): string {
    return 'assets/Fotos/' + restaurante.Imagen;
  }

}
