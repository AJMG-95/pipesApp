import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heros: Hero[], sortBy?: keyof Hero | '', order?: 'asc' | 'desc'): Hero[] {
    if (!sortBy) {
      return heros;
    }

    // Comparador de función para ordenar según la dirección (ascendente o descendente)
    const compare = (a: Hero, b: Hero): number => {
      if (a[sortBy] < b[sortBy]) {
        return order === 'asc' ? -1 : 1;
      } else if (a[sortBy] > b[sortBy]) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    };

    // Ordenar la lista de héroes utilizando la función comparadora
    return heros.sort(compare);
  }
}
