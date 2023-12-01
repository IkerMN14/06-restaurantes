import { Pipe, PipeTransform } from '@angular/core';
import { Restaurantes } from '../interfaces/restaurantes.interfaces';

@Pipe({
  name: 'imagen',
  pure : false
})
export class ImagenPipe implements PipeTransform {

  transform(restaurante: Restaurantes): string {
    if (!restaurante.id && !restaurante.alt_img) {
      return 'assets/Fotos/noimages.jpg';
    } else if (restaurante.alt_img) {
      return restaurante.alt_img;
    }
    return 'assets/Fotos/' + restaurante.imagen

  }



}
