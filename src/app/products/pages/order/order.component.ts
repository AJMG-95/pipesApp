import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public changeCase: 'u' | 'l' | 't' | '' = ''
  public heros: Hero[] = [
    { name: 'SuperMan', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.red },
    { name: 'Linterna Verde', canFly: true, color: Color.green },
  ]

  toggleChangeCase(): void {
    // Alterna el valor de changeCase en el ciclo ['', 'l', 'u', 't']
    switch (this.changeCase) {
      case '':
        this.changeCase = 'l'; // De '' a 'l'
        break;
      case 'l':
        this.changeCase = 'u'; // De 'l' a 'u'
        break;
      case 'u':
        this.changeCase = 't'; // De 'u' a 't'
        break;
      case 't':
        this.changeCase = ''; // De 't' a ''
        break;
      default:
        this.changeCase = ''; // Si algo no está en el ciclo, vuelve a ''
        break;
    }
  }
}
