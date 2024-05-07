import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent {
  // Propiedades para almacenar la columna por la que se ordenará la lista de héroes y la dirección del orden
  public orderBy?: keyof Hero;
  public sortOrder?: 'asc' | 'desc';

  // Propiedad para controlar el estado de cambio de mayúsculas y minúsculas
  public changeCase: 'u' | 'l' | 't' = 'l';

  // Lista de héroes con sus respectivas propiedades (nombre, si puede volar, color)
  public heros: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.red },
    { name: 'Linterna Verde', canFly: true, color: Color.green },
    { name: 'Mujer Maravilla', canFly: false, color: Color.red },
    { name: 'Flash', canFly: false, color: Color.red },
    { name: 'Aquaman', canFly: false, color: Color.orange },
    { name: 'Spider-Man', canFly: false, color: Color.red },
    { name: 'Iron Man', canFly: true, color: Color.red },
    { name: 'Capitán América', canFly: false, color: Color.blue },
    { name: 'Thor', canFly: true, color: Color.blue },
    { name: 'Hulk', canFly: false, color: Color.green },
    { name: 'Doctor Strange', canFly: true, color: Color.red },
    { name: 'Black Panther', canFly: false, color: Color.black },
    { name: 'Wolverine', canFly: false, color: Color.yellow },
    { name: 'Storm', canFly: true, color: Color.white },
    { name: 'Cyclops', canFly: false, color: Color.blue },
    { name: 'Magneto', canFly: true, color: Color.purple },
    { name: 'Jean Grey', canFly: true, color: Color.red },
    { name: 'Beast', canFly: false, color: Color.blue },
  ];

  /**
   * Método para alternar el estado de changeCase entre '', 'l', 'u' y 't' (minúscula, mayúscula, título)
   */
  toggleChangeCase(): void {
    switch (this.changeCase) {
      case 'l':
        this.changeCase = 'u'; // Cambiar de minúscula a mayúscula
        break;
      case 'u':
        this.changeCase = 't'; // Cambiar de mayúscula a título
        break;
      case 't':
        this.changeCase = 'l'; // Cambiar de título a ''
        break;
      default:
        this.changeCase = 't'; // Cambiar de '' a minúscula
        break;
    }
  }

  /**
   * Cambia la columna por la que se ordena la lista de héroes y alterna la dirección del orden
   * @param order La propiedad de Hero por la que se debe ordenar
   */
  changeOrder(order: keyof Hero): void {
    this.orderBy = order;
    this.toggleSortOrder(); // Alterna la dirección del orden (ascendente o descendente)
  }

  /**
   * Alterna la dirección del orden entre 'asc' (ascendente) y 'desc' (descendente)
   */
  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
