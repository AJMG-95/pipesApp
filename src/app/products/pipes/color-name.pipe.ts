import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorName'
})
export class ColorNamePipe implements PipeTransform {

  /**
     * Transforma un índice de color en el nombre del color correspondiente.
     * @param colorIndex El índice del color en el enum `Color`.
     * @returns El nombre del color correspondiente.
     */
  transform(colorIndex: Color): string {
    // Convierte el índice a una cadena
    return Color[colorIndex];
  }

}
