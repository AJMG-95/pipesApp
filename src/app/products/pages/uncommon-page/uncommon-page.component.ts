import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Antonio Jesús';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }


  changeClient(): void {
    this.name = this.name == 'Antonio Jesús' ? 'Sandra' : 'Antonio Jesús';
    this.gender = this.gender == 'male' ? 'female' : 'male';
  }


  //i18nPlural
  public clients: string[] = []
  public clientsMap = {
    '=0': 'No hay clientes esperando.',
    '=1': 'Hay un cliente esperando.',
    'other': 'Hay # clientes esperando.'
  };
  nextClient(): void {
    // Array con los nombres posibles de clientes
    const array = ['Sandra', 'Antonio Jesús', 'Nerea', 'Adrián', 'Ezequiel', 'Alba', 'Estrella'];

    // Elimina el primer cliente de la lista (si hay alguno)
    if (this.clients.length !== 0) {
      this.clients.shift();
    } else {
      // Genera un número aleatorio entre 0 y 6
      const numb = Math.floor(Math.random() * 7);

      // Asigna los nombres del array a this.clients según el número aleatorio generado
      for (let i = 0; i <= numb; i++) {
        this.clients.push(array[i]);
      }
    }

  }


  // Json Pipe && KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value: any) => console.log('tap: ', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hay data en la promesa');
    }, 3500)
  })

}
