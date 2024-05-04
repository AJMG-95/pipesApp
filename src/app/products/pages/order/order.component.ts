import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public changeCase: 'u' | 'l' | 't' | '' = ''

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
